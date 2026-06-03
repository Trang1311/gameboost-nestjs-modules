import { GameboostHttpService } from '../gameboost-http.service';
import { CreateCurrencyOfferDto, UpdateCurrencyOfferDto, ListCurrencyOffersQueryDto, CurrencyOfferDto } from './currency-offers.dto';
export declare class CurrencyOffersService {
    private readonly http;
    private readonly logger;
    private readonly BASE;
    constructor(http: GameboostHttpService);
    findAll(query: ListCurrencyOffersQueryDto): Promise<{
        data: CurrencyOfferDto[];
        meta: any;
    }>;
    findOne(id: number): Promise<{
        data: CurrencyOfferDto;
    }>;
    create(dto: CreateCurrencyOfferDto): Promise<{
        data: CurrencyOfferDto;
    }>;
    update(id: number, dto: UpdateCurrencyOfferDto): Promise<{
        data: CurrencyOfferDto;
    }>;
    listOffer(id: number): Promise<{
        data: CurrencyOfferDto;
    }>;
    unlistOffer(id: number): Promise<{
        data: CurrencyOfferDto;
    }>;
    archiveOffer(id: number): Promise<{
        data: CurrencyOfferDto;
    }>;
    restoreOffer(id: number): Promise<{
        data: CurrencyOfferDto;
    }>;
}
