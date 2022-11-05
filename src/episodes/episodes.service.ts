import { Injectable } from '@nestjs/common';
import { pool } from 'src/database/conexion';
import { ReadEpisodeDto } from './dto/read-episode.dto';
import { ReadEpisodesDto } from './dto/read-episodes.dto';

@Injectable()
export class EpisodesService {
  async getAllEpisodes(): Promise<ReadEpisodesDto[]> {
    try {
      const response = await pool.query(
        'SELECT season,chapter,name,video FROM episode',
      );
      return response.rows;
    } catch (err) {
      return [];
    }
  }
  async getEpisode({
    chapter,
    season,
  }: ReadEpisodeDto): Promise<ReadEpisodesDto> {
    try {
      const response = await pool.query(
        'SELECT season,chapter,name,video FROM episode WHERE chapter=$1 and season=$2',
        [chapter, season],
      );
      return response.rows[0];
    } catch (err) {
      return { id: null, chapter: null, name: '', season: null, video: '' };
    }
  }
}
