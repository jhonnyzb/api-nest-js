import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from '../entities/activity.entity';
import { Repository } from 'typeorm';
import { ModuleService } from './module.service';
import { CreateActivityDto, UpdateActivityDto } from '../dtos/activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activitiesRepository: Repository<Activity>,
    private moduleService: ModuleService,
  ) {}

  async findAll(): Promise<Activity[]> {
    return this.activitiesRepository.find();
  }

  async create(activity: CreateActivityDto): Promise<Activity> {
    const module = await this.moduleService.findById(activity.moduleId);
    if (!module) throw new NotFoundException('Module not found');
    const newActivity = await this.activitiesRepository.create(activity);
    return this.activitiesRepository.save(newActivity);
  }

  async update(id: number, body: UpdateActivityDto): Promise<Activity> {
    const activity = await this.activitiesRepository.findOneBy({
      id,
      moduleId: body.moduleId,
    });
    if (!activity) {
      throw new NotFoundException(
        'This activity does not belong to the selected module',
      );
    }
    const newActivity = {
      id,
      ...body,
    };
    const updateActivity = await this.activitiesRepository.preload(newActivity);
    if (!updateActivity) throw new NotFoundException('Activity not found');
    return this.activitiesRepository.save(updateActivity);
  }

  async delete(id: number) {
    const result = await this.activitiesRepository.delete({ id });
    if (result.affected === 0)
      throw new NotFoundException('Activity not found');
    return result;
  }
}
