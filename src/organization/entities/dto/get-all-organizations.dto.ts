import { ApiProperty } from '@nestjs/swagger';

export class GetAllOrganizationsDto {
  @ApiProperty()
  userId: string;
}
