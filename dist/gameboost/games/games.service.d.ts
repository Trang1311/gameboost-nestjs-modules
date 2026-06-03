import { GameboostHttpService } from '../gameboost-http.service';
export declare class GamesService {
    private readonly http;
    private readonly logger;
    constructor(http: GameboostHttpService);
    findAll(params?: {
        page?: number;
        per_page?: number;
        search?: string;
    }): Promise<{
        data: any[];
    }>;
    findOne(slug: string): Promise<{
        data: any;
    }>;
}
