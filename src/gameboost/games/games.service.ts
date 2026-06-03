import { Injectable, Logger } from '@nestjs/common';
import { GameboostHttpService } from '../gameboost-http.service';

@Injectable()
export class GamesService {
  private readonly logger = new Logger(GamesService.name);

  constructor(private readonly http: GameboostHttpService) {}

  async findAll(params?: { page?: number; per_page?: number; search?: string }) {
    this.logger.log('Fetching games list');
    return this.http.get<{ data: any[] }>('/games', { params });
  }

  async findOne(slug: string) {
    this.logger.log(`Fetching game: ${slug}`);
    return this.http.get<{ data: any }>(`/games/${slug}`);
  }
}
