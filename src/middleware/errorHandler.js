export function notFoundHandler(req, res) {
  res.status(404).json({
    ok: false,
    error: 'Ruta no encontrada',
    path: req.originalUrl
  });
}

export function errorHandler(err, req, res, next) {
  const status = err.statusCode || err.status || 500;

  if (status >= 500) {
    console.error(err);
  }

  res.status(status).json({
    ok: false,
    error: err.message || 'Error interno del servidor'
  });
}
