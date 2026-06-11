# Integración API-Football

## Regla crítica

La app móvil o web **no debe llamar directamente** a API-Football porque expondría la API key. La app debe llamar a este backend y este backend consulta API-Football.

## Autenticación

API-Football v3 usa el header:

```http
x-apisports-key: TU_API_KEY
```

Base URL recomendada:

```txt
https://v3.football.api-sports.io
```

## Endpoints externos que sí usaremos

- `/status`: revisar uso y estado de cuenta.
- `/countries`: países y banderas.
- `/leagues`: buscar la competición del Mundial.
- `/teams`: selecciones/equipos.
- `/fixtures`: partidos, fechas, resultados.

## Endpoints externos que no usaremos

- Odds.
- Betting.
- Prediction markets.

La app se manejará como quiniela de puntos y marcadores entre usuarios, no como sistema de apuestas.
