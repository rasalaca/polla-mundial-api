import { Router } from 'express';
import { apiFootballGet } from '../services/apiFootball.js';

export const footballRouter = Router();

footballRouter.get('/status', async (req, res, next) => {
  try {
    res.json(await apiFootballGet('/status'));
  } catch (error) {
    next(error);
  }
});

footballRouter.get('/countries', async (req, res, next) => {
  try {
    res.json(await apiFootballGet('/countries', {
      search: req.query.search
    }));
  } catch (error) {
    next(error);
  }
});

footballRouter.get('/leagues', async (req, res, next) => {
  try {
    res.json(await apiFootballGet('/leagues', {
      id: req.query.id,
      name: req.query.name,
      country: req.query.country,
      search: req.query.search,
      season: req.query.season
    }));
  } catch (error) {
    next(error);
  }
});

footballRouter.get('/teams', async (req, res, next) => {
  try {
    res.json(await apiFootballGet('/teams', {
      id: req.query.id,
      name: req.query.name,
      league: req.query.league,
      season: req.query.season,
      country: req.query.country,
      search: req.query.search
    }));
  } catch (error) {
    next(error);
  }
});

footballRouter.get('/fixtures', async (req, res, next) => {
  try {
    res.json(await apiFootballGet('/fixtures', {
      id: req.query.id,
      league: req.query.league,
      season: req.query.season,
      team: req.query.team,
      date: req.query.date,
      from: req.query.from,
      to: req.query.to,
      status: req.query.status
    }));
  } catch (error) {
    next(error);
  }
});
