import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  apiFootball: {
    baseUrl: process.env.API_FOOTBALL_BASE_URL ?? 'https://v3.football.api-sports.io',
    key: process.env.API_FOOTBALL_KEY ?? '',
    cacheTtlSeconds: Number(process.env.CACHE_TTL_SECONDS ?? 600)
  },
  cors: {
    allowedOrigin: process.env.ALLOWED_ORIGIN ?? '*'
  }
};

export function assertRequiredConfig() {
  if (!config.apiFootball.key) {
    console.warn('[config] API_FOOTBALL_KEY no está configurada. Los endpoints externos fallarán hasta agregarla en .env.');
  }
}
