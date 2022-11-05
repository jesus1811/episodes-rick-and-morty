import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';

@Module({
  imports: [],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
