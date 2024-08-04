import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  fantasyName: string;

  @Column()
  @ApiProperty()
  registerEntity: string;

  @Column()
  @ApiProperty()
  typeOrganization: string;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  cnpj: string;

  @Column({ nullable: true })
  @ApiProperty({ required: false })
  uf: string;

  @Column()
  @ApiProperty()
  userId: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  cpf: string;

  @Column()
  @ApiProperty()
  dateOfBirth: string;
}
