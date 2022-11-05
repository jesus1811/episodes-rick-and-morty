import { Injectable } from '@nestjs/common';
import { pool } from 'src/database/conexion';
import { Episode } from './entities/episodes.entity';

@Injectable()
export class EpisodesService {
  async findAll(): Promise<Episode[]> {
    try {
      const response = await pool.query(
        'SELECT season,chapter,name,video FROM episode',
      );
      return response.rows;
    } catch (err) {
      return [];
    }
  }
  async findOne({ chapter, season }: Partial<Episode>): Promise<Episode> {
    try {
      const response = await pool.query(
        'SELECT season,chapter,name,video FROM episode WHERE chapter=$1 and season=$2',
        [chapter, season],
      );
      const [episode] = response.rows;
      return episode;
    } catch (err) {
      return { id: null, chapter: null, name: '', season: null, video: '' };
    }
  }
}
