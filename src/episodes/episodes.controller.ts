import { Controller, Get, Param, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
@Controller('api/episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  findAll() {
    return this.episodesService.findAll();
  }

  @Get(':chapter')
  findOne(@Param('chapter') chapter: number, @Query('season') season: number) {
    if (!season || !chapter) return { message: 'error request', code: '400' };
    return this.episodesService.findOne({ chapter, season });
  }
}
