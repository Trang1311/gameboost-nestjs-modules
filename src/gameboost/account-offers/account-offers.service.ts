import { Injectable, Logger } from '@nestjs/common';
import { GameboostHttpService } from '../gameboost-http.service';
import {
  CreateAccountOfferDto,
  UpdateAccountOfferDto,
  ListAccountOffersQueryDto,
  AccountOfferDto,
} from './account-offers.dto';

@Injectable()
export class AccountOffersService {
  private readonly logger = new Logger(AccountOffersService.name);
  private readonly BASE = '/account-offers';

  constructor(private readonly http: GameboostHttpService) {}

  async findAll(query: ListAccountOffersQueryDto) {
    this.logger.log('Fetching all account offers');
    const response = await this.http.get<{ data: AccountOfferDto[]; meta: any; links: any }>(
      this.BASE,
      { params: query },
    );

    // Client-side filtering fallback
    if (response?.data && query.filter) {
      let filtered = [...response.data];

      // Filter by search term
      if (query.filter.search) {
        const searchTerm = query.filter.search.toLowerCase();
        filtered = filtered.filter(
          (offer) =>
            offer.title.toLowerCase().includes(searchTerm) ||
            offer.slug.toLowerCase().includes(searchTerm) ||
            offer.external_id?.toLowerCase().includes(searchTerm),
        );
      }

      // Filter by game_id
      if (query.filter.game_id && query.filter.game_id.length > 0) {
        filtered = filtered.filter((offer) =>
          query.filter!.game_id!.includes(offer.game.id),
        );
      }

      response.data = filtered;
      // Update meta after filtering
      if (response.meta) {
        response.meta.total = filtered.length;
        response.meta.to = Math.min(response.meta.per_page, filtered.length);
      }
    }

    return response;
  }

  async findOne(id: number) {
    this.logger.log(`Fetching account offer #${id}`);
    return this.http.get<{ data: AccountOfferDto }>(`${this.BASE}/${id}`);
  }

  async create(dto: CreateAccountOfferDto) {
    this.logger.log(`Creating account offer: ${dto.title}`);
    return this.http.post<{ data: AccountOfferDto }>(
      `${this.BASE}/create`,
      dto,
    );
  }

  async update(id: number, dto: UpdateAccountOfferDto) {
    this.logger.log(`Updating account offer #${id}`);
    return this.http.patch<{ data: AccountOfferDto }>(
      `${this.BASE}/${id}`,
      dto,
    );
  }

  async remove(id: number) {
    this.logger.log(`Deleting account offer #${id}`);
    return this.http.delete<void>(`${this.BASE}/${id}`);
  }

  async listOffer(id: number) {
    this.logger.log(`Listing account offer #${id}`);
    return this.http.post<{ data: AccountOfferDto }>(
      `${this.BASE}/${id}/list`,
    );
  }

  async unlistOffer(id: number) {
    this.logger.log(`Setting account offer #${id} to draft`);
    return this.http.post<{ data: AccountOfferDto }>(
      `${this.BASE}/${id}/draft `,
    );
  }

  async duplicateOffer(id: number) {
    this.logger.log(`Duplicating account offer #${id}`);
    return this.http.post<{ data: AccountOfferDto }>(
      `${this.BASE}/${id}/actions/duplicate`,
    );
  }

  async getTemplate(gameSlug: string) {
    this.logger.log(`Fetching account offer template for game: ${gameSlug}`);
    return this.http.get<{ data: any }>(`${this.BASE}/templates/${gameSlug}`);
  }

async bulkUpdatePrice(items: Array<{ external_id: string; price: number }>) {
  this.logger.log(`Bulk updating prices for ${items.length} items`);

  // Chạy song song, giới hạn 5 request cùng lúc để không bị rate limit
  const CONCURRENCY = 5;
  let succeeded = 0;
  let failed = 0;
  const errors: string[] = [];

  const processItem = async (item: { external_id: string; price: number }) => {
    try {
      const response = await this.http.get<{ data: AccountOfferDto[]; meta: any }>(
        this.BASE,
        { params: { per_page: 10, 'filter[search]': item.external_id } },
      );

      const offers = response?.data || [];
      const offer = offers.find((o) => {
        const title = o.title?.trim().toUpperCase();
        return title?.startsWith(item.external_id.toUpperCase());
      });

      if (!offer) {
        failed++;
        errors.push(`${item.external_id} - không tìm thấy`);
        return;
      }

      await this.update(offer.id, { price: item.price });
      succeeded++;
    } catch (e: any) {
      failed++;
      const errMsg = e?.response?.data?.message || e.message || 'Unknown error';
      errors.push(`${item.external_id} - ${errMsg}`);
    }
  };

  // Chạy theo batch, mỗi batch 5 items song song
  for (let i = 0; i < items.length; i += CONCURRENCY) {
    const batch = items.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(processItem));
  }

  return {
    succeeded,
    failed,
    total: items.length,
    errors: errors.length > 0 ? errors : undefined,
  };
}
}
