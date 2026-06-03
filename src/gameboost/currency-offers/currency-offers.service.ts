import { Injectable, Logger } from '@nestjs/common';
import { GameboostHttpService } from '../gameboost-http.service';
import {
  CreateCurrencyOfferDto,
  UpdateCurrencyOfferDto,
  ListCurrencyOffersQueryDto,
  CurrencyOfferDto,
} from './currency-offers.dto';

@Injectable()
export class CurrencyOffersService {
  private readonly logger = new Logger(CurrencyOffersService.name);
  private readonly BASE = '/currency-offers';

  constructor(private readonly http: GameboostHttpService) {}

  async findAll(query: ListCurrencyOffersQueryDto) {
    return this.http.get<{ data: CurrencyOfferDto[]; meta: any }>(
      this.BASE,
      { params: query },
    );
  }

  async findOne(id: number) {
    return this.http.get<{ data: CurrencyOfferDto }>(`${this.BASE}/${id}`);
  }

  async create(dto: CreateCurrencyOfferDto) {
    this.logger.log(`Creating currency offer: ${dto.title}`);
    return this.http.post<{ data: CurrencyOfferDto }>(this.BASE, dto);
  }

  async update(id: number, dto: UpdateCurrencyOfferDto) {
    return this.http.patch<{ data: CurrencyOfferDto }>(`${this.BASE}/${id}`, dto);
  }

  async listOffer(id: number) {
    this.logger.log(`Publishing currency offer #${id}`);
    return this.http.patch<{ data: CurrencyOfferDto }>(
      `${this.BASE}/${id}/actions/list`,
    );
  }

  async unlistOffer(id: number) {
    return this.http.patch<{ data: CurrencyOfferDto }>(
      `${this.BASE}/${id}/actions/unlist`,
    );
  }

  async archiveOffer(id: number) {
    return this.http.patch<{ data: CurrencyOfferDto }>(
      `${this.BASE}/${id}/actions/archive`,
    );
  }

  async restoreOffer(id: number) {
    return this.http.patch<{ data: CurrencyOfferDto }>(
      `${this.BASE}/${id}/actions/restore`,
    );
  }
}
