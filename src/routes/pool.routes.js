import { Router } from 'express';

export const poolRouter = Router();

const pools = [];
const predictions = [];

poolRouter.get('/', (req, res) => {
  res.json({ ok: true, data: pools });
});

poolRouter.post('/', (req, res) => {
  const { name, adminName } = req.body;

  if (!name || !adminName) {
    return res.status(400).json({ ok: false, error: 'name y adminName son obligatorios.' });
  }

  const pool = {
    id: crypto.randomUUID(),
    name,
    adminName,
    inviteCode: crypto.randomUUID().slice(0, 8),
    createdAt: new Date().toISOString()
  };

  pools.push(pool);
  res.status(201).json({ ok: true, data: pool });
});

poolRouter.post('/:poolId/predictions', (req, res) => {
  const { poolId } = req.params;
  const { participantName, fixtureId, homeGoals, awayGoals } = req.body;

  if (!participantName || !fixtureId || homeGoals === undefined || awayGoals === undefined) {
    return res.status(400).json({
      ok: false,
      error: 'participantName, fixtureId, homeGoals y awayGoals son obligatorios.'
    });
  }

  const prediction = {
    id: crypto.randomUUID(),
    poolId,
    participantName,
    fixtureId,
    homeGoals: Number(homeGoals),
    awayGoals: Number(awayGoals),
    createdAt: new Date().toISOString()
  };

  predictions.push(prediction);
  res.status(201).json({ ok: true, data: prediction });
});

poolRouter.get('/:poolId/predictions', (req, res) => {
  const data = predictions.filter((prediction) => prediction.poolId === req.params.poolId);
  res.json({ ok: true, data });
});
