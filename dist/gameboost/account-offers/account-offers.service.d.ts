import { GameboostHttpService } from '../gameboost-http.service';
import { CreateAccountOfferDto, UpdateAccountOfferDto, ListAccountOffersQueryDto, AccountOfferDto } from './account-offers.dto';
export declare class AccountOffersService {
    private readonly http;
    private readonly logger;
    private readonly BASE;
    constructor(http: GameboostHttpService);
    findAll(query: ListAccountOffersQueryDto): Promise<{
        data: AccountOfferDto[];
        meta: any;
        links: any;
    }>;
    findOne(id: number): Promise<{
        data: AccountOfferDto;
    }>;
    create(dto: CreateAccountOfferDto): Promise<{
        data: AccountOfferDto;
    }>;
    update(id: number, dto: UpdateAccountOfferDto): Promise<{
        data: AccountOfferDto;
    }>;
    remove(id: number): Promise<void>;
    listOffer(id: number): Promise<{
        data: AccountOfferDto;
    }>;
    unlistOffer(id: number): Promise<{
        data: AccountOfferDto;
    }>;
    duplicateOffer(id: number): Promise<{
        data: AccountOfferDto;
    }>;
    getTemplate(gameSlug: string): Promise<{
        data: any;
    }>;
    bulkUpdatePrice(items: Array<{
        external_id: string;
        price: number;
    }>): Promise<{
        succeeded: number;
        failed: number;
        total: number;
        errors: string[];
    }>;
}
