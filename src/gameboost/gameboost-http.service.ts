import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Injectable()
export class GameboostHttpService {
  private readonly logger = new Logger(GameboostHttpService.name);
  private readonly client: AxiosInstance;

  constructor(private readonly configService: ConfigService) {
    const apiUrl = this.configService.get<string>('gameboost.apiUrl');
    const apiToken = this.configService.get<string>('gameboost.apiToken');
    const timeout = this.configService.get<number>('gameboost.timeout');

    this.client = axios.create({
      baseURL: apiUrl,
      timeout,
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Request interceptor
    this.client.interceptors.request.use((config) => {
      this.logger.debug(`→ ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    });

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        this.logger.debug(`← ${response.status} ${response.config.url}`);
        return response;
      },
      (error) => {
        const status = error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
        const message =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message;
        this.logger.error(
          `GameBoost API error [${status}]: ${message}`,
          JSON.stringify(error.response?.data),
        );
        throw new HttpException(
          {
            statusCode: status,
            message: `GameBoost API: ${message}`,
            gameboostError: error.response?.data,
          },
          status,
        );
      },
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}
