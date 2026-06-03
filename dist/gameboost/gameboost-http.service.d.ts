import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
export declare class GameboostHttpService {
    private readonly configService;
    private readonly logger;
    private readonly client;
    constructor(configService: ConfigService);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
}
