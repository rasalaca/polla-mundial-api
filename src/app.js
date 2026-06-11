import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config } from './config.js';
import { healthRouter } from './routes/health.routes.js';
import { footballRouter } from './routes/football.routes.js';
import { poolRouter } from './routes/pool.routes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.cors.allowedOrigin === '*' ? true : config.cors.allowedOrigin }));
  app.use(express.json({ limit: '1mb' }));
  app.use(rateLimit({ windowMs: 60_000, limit: 120 }));

  app.use('/health', healthRouter);
  app.use('/api/football', footballRouter);
  app.use('/api/pools', poolRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
