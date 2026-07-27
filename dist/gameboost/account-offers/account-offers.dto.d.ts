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
    id?: number | null;
    title: string;
    slug: string;
    description: string;
    original_price?: number | null;
    price: number;
    game_id: number;
    login?: string | null;
    password?: string | null;
    email_login?: string | null;
    email_password?: string | null;
    email_provider?: string | null;
    note?: string | null;
    dump?: string | null;
    delivery_instructions?: string | null;
    delivery_time: DeliveryTimeDto;
    is_manual: boolean;
    is_featured: boolean;
    is_rare: boolean;
    is_discounted: boolean;
    gallery: Record<string, any>;
    account_data: Record<string, any>;
    game_items: Record<string, any>;
    account_package_id?: number | null;
    private_note?: string | null;
    credentials: string[];
    external_id?: string | null;
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
