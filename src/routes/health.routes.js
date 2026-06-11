import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
  res.json({
    ok: true,
    service: 'polla-mundial-api',
    timestamp: new Date().toISOString()
  });
});
