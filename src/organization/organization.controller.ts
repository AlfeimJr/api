import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Organization } from './entities/oganization.entity';

@ApiBearerAuth()
@ApiTags('Organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @ApiOperation({ summary: 'Listar todas as organizações do usuário atual' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req): Promise<Organization[]> {
    const userId = req.user.userId;
    return this.organizationService.findAll(userId);
  }

  @ApiOperation({ summary: 'Obter organização por ID' })
  @ApiBody({ type: Organization })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Organization> {
    return this.organizationService.findOne(id);
  }

  @ApiOperation({ summary: 'Criar nova organização' })
  @ApiBody({ type: Organization })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() organization: Organization): Promise<Organization> {
    return this.organizationService.create(organization);
  }

  @ApiOperation({ summary: 'Atualizar organização por ID' })
  @ApiBody({ type: Organization })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() organization: Organization,
  ): Promise<void> {
    return this.organizationService.update(id, organization);
  }

  @ApiOperation({ summary: 'Remover organização por ID' })
  @ApiBody({ type: Organization })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.organizationService.remove(id);
  }

  @ApiBearerAuth()
  @ApiBody({ type: Organization })
  @ApiOperation({ summary: 'Pegar organização do usuário atual' })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('me')
  findOneByUser(@Request() req) {
    const userId = req.user.userId;
    return this.organizationService.findByUserId(userId);
  }
}
