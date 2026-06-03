import { GameDto, DeliveryTimeDto } from '../../common/dto/common.dto';
export declare class DeliveryTimeInputDto {
    duration: number;
    unit: 'minutes' | 'hours' | 'days';
}
export declare class GameItemsDto {
    champions?: string[];
    skins?: string[];
}
export declare class CreateAccountOfferDto {
    game_id: number;
    title: string;
    description: string;
    price: number;
    credentials: string[];
    image_urls?: string[];
    account_data?: Record<string, any>;
    game?: string;
    external_id?: string;
    slug?: string;
    dump?: string;
    private_note?: string;
    is_manual?: boolean;
    delivery_instructions?: string;
    delivery_time?: DeliveryTimeInputDto;
    game_items?: GameItemsDto;
}
export declare class UpdateAccountOfferDto {
    title?: string;
    description?: string;
    price?: number;
    image_urls?: string[];
    delivery_instructions?: string;
    delivery_time?: DeliveryTimeInputDto;
}
export declare class ListAccountOffersQueryDto {
    page?: number;
    per_page?: number;
    status?: string;
    game_slug?: string;
    filter?: {
        search?: string;
        game_id?: number[];
    };
}
export declare class AccountOfferCredentialsDto {
    login: string;
    password: string;
    email_login: string;
    email_password: string;
    email_provider: string;
}
export declare class AccountOfferDto {
    id: number;
    external_id?: string;
    game: GameDto;
    account_order_ids: number[];
    title: string;
    slug: string;
    description: string;
    parameters: Record<string, any>;
    dump?: string;
    delivery_time: DeliveryTimeDto;
    is_manual_delivery: boolean;
    credentials: AccountOfferCredentialsDto;
    delivery_instructions?: string;
    price: string;
    price_usd: string;
    views: number;
    image_urls: string[];
    created_at: number;
    updated_at: number;
    listed_at?: number;
}
