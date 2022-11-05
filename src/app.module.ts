import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesService } from './episodes/episodes.service';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [EpisodesModule],
  controllers: [AppController, EpisodesController],
  providers: [AppService, EpisodesService],
})
export class AppModule {}
