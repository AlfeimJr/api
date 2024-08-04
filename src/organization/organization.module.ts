import { forwardRef, Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/oganization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization]),
    forwardRef(() => OrganizationModule),
  ],
  providers: [OrganizationService],
  controllers: [OrganizationController],
  exports: [OrganizationService],
})
export class OrganizationModule {}
