import { GameDto, DeliveryTimeDto } from '../../common/dto/common.dto';
export declare class CreateCurrencyOfferDto {
    game_id: number;
    title: string;
    description: string;
    price: number;
    amount: number;
    is_manual?: boolean;
    delivery_instructions?: string;
    external_id?: string;
}
export declare class UpdateCurrencyOfferDto {
    title?: string;
    description?: string;
    price?: number;
    amount?: number;
}
export declare class ListCurrencyOffersQueryDto {
    page?: number;
    per_page?: number;
    status?: string;
    game_slug?: string;
}
export declare class CurrencyOfferDto {
    id: number;
    external_id?: string;
    game: GameDto;
    title: string;
    description: string;
    price: string;
    price_usd: string;
    amount: number;
    is_manual_delivery: boolean;
    delivery_instructions?: string;
    delivery_time: DeliveryTimeDto;
    status: string;
    created_at: number;
    updated_at: number;
}
