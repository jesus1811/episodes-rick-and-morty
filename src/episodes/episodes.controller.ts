import { Controller, Get, Param, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
@Controller('api/episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  getAllEpisode() {
    return this.episodesService.getAllEpisodes();
  }

  @Get(':chapter')
  getEpisode(
    @Param('chapter') chapter: number,
    @Query('season') season: number,
  ) {
    if (!season || !chapter) return { message: 'error request', code: '400' };
    return this.episodesService.getEpisode({ chapter, season });
  }
}
