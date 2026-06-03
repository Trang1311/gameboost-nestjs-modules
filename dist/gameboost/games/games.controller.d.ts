import { GamesService } from './games.service';
export declare class GamesController {
    private readonly service;
    constructor(service: GamesService);
    findAll(page?: number, per_page?: number, search?: string): Promise<{
        data: any[];
    }>;
    findOne(slug: string): Promise<{
        data: any;
    }>;
}
