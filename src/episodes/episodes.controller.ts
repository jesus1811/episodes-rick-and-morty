import { Controller, Get, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
@Controller('api/episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  getAllEpisode() {
    return this.episodesService.getAllEpisodes();
  }

  @Get('api/:episode')
  getEpisode(
    @Query('chapter') chapter: number,
    @Query('season') season: number,
  ) {
    return this.episodesService.getEpisode({ chapter, season });
  }
}
