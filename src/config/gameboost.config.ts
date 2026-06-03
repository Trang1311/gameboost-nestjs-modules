import { registerAs } from '@nestjs/config';

export default registerAs('gameboost', () => ({
  apiUrl: process.env.GAMEBOOST_API_URL || 'https://api.gameboost.com/v2',
  apiToken: process.env.GAMEBOOST_API_TOKEN || '',
  timeout: parseInt(process.env.GAMEBOOST_TIMEOUT || '10000', 10),
}));
