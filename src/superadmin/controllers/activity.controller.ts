import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityService } from '../services/activity.service';
import { CreateActivityDto, UpdateActivityDto } from '../dtos/activity.dto';
import { Activity } from '../entities/activity.entity';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  all(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Post()
  create(@Body() payload: CreateActivityDto): Promise<Activity> {
    return this.activityService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateActivityDto,
  ): Promise<Activity> {
    return this.activityService.update(+id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.activityService.delete(id);
  }
}
