const memoryCache = new Map();

export function getCache(key) {
  const record = memoryCache.get(key);

  if (!record) return null;

  if (Date.now() > record.expiresAt) {
    memoryCache.delete(key);
    return null;
  }

  return record.value;
}

export function setCache(key, value, ttlSeconds) {
  memoryCache.set(key, {
    value,
    expiresAt: Date.now() + ttlSeconds * 1000
  });
}

export function clearCache() {
  memoryCache.clear();
}
