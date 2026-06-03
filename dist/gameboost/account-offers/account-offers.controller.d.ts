import { AccountOffersService } from './account-offers.service';
import { CreateAccountOfferDto, UpdateAccountOfferDto, ListAccountOffersQueryDto, AccountOfferDto } from './account-offers.dto';
export declare class AccountOffersController {
    private readonly service;
    constructor(service: AccountOffersService);
    findAll(query: ListAccountOffersQueryDto): Promise<{
        data: AccountOfferDto[];
        meta: any;
        links: any;
    }>;
    getTemplate(gameSlug: string): Promise<{
        data: any;
    }>;
    findOne(id: number): Promise<{
        data: AccountOfferDto;
    }>;
    create(dto: CreateAccountOfferDto): Promise<{
        data: AccountOfferDto;
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
}
