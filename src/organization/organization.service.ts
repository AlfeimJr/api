import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/oganization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  findAll(userId: string): Promise<Organization[]> {
    return this.organizationRepository.find({ where: { userId } });
  }

  findOne(id: number): Promise<Organization> {
    return this.organizationRepository.findOne(id);
  }

  create(organization: Organization): Promise<Organization> {
    return this.organizationRepository.save(organization);
  }

  async update(id: number, organization: Organization): Promise<void> {
    await this.organizationRepository.update(id, organization);
  }

  async remove(id: number): Promise<void> {
    await this.organizationRepository.delete(id);
  }

  findByUserId(userId: string): Promise<Organization[]> {
    return this.organizationRepository.find({ where: { userId } });
  }
}
