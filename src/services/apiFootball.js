import { config } from '../config.js';
import { getCache, setCache } from './cache.js';

function toQueryString(params = {}) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, String(value));
    }
  }

  return query.toString();
}

export async function apiFootballGet(path, params = {}) {
  if (!config.apiFootball.key) {
    const error = new Error('Falta configurar API_FOOTBALL_KEY en variables de entorno.');
    error.statusCode = 500;
    throw error;
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  const qs = toQueryString(params);
  const url = `${config.apiFootball.baseUrl}/${normalizedPath}${qs ? `?${qs}` : ''}`;
  const cacheKey = `GET:${url}`;

  const cached = getCache(cacheKey);
  if (cached) {
    return { ...cached, cached: true };
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-apisports-key': config.apiFootball.key
    }
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(data?.message || `API-Football respondió HTTP ${response.status}`);
    error.statusCode = response.status;
    throw error;
  }

  const result = {
    cached: false,
    source: 'api-football',
    endpoint: normalizedPath,
    params,
    data
  };

  setCache(cacheKey, result, config.apiFootball.cacheTtlSeconds);
  return result;
}
