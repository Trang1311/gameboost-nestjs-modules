export declare class PaginationMetaDto {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
}
export declare class PaginationLinksDto {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
}
export declare class GameDto {
    id: number;
    name: string;
    slug: string;
}
export declare class DeliveryTimeDto {
    duration: number;
    format: string;
    format_long: string;
    seconds: number;
}
