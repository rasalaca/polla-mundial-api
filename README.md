# Polla Mundial API

Backend base para una quiniela mundialista de puntos. El objetivo es consultar API-Football desde un servidor propio y no exponer la API key en la app móvil ni en GitHub Pages.

## Stack

- Node.js 20+
- Express
- API-Football v3
- GitHub Actions para CI

## Instalación local

```bash
npm install
cp .env.example .env
npm run dev
```

Edita `.env` y coloca tu key real:

```bash
API_FOOTBALL_KEY=tu_key_real
```

No subas `.env` a GitHub.

## Probar endpoints

```bash
curl http://localhost:3000/health
curl http://localhost:3000/api/football/status
curl "http://localhost:3000/api/football/leagues?search=World%20Cup&season=2026"
curl "http://localhost:3000/api/football/fixtures?league=1&season=2026"
```

El `league=1` es un ejemplo. Primero hay que consultar `/api/football/leagues?search=World%20Cup&season=2026` y confirmar cuál ID devuelve API-Football para el Mundial 2026.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Initial API-Football backend"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/polla-mundial-api.git
git push -u origin main
```

## Reglas de seguridad

1. Nunca pegues la API key en el código.
2. Nunca subas `.env`.
3. El frontend no debe consumir API-Football directamente.
4. Para producción, configura `API_FOOTBALL_KEY` como variable de entorno en el hosting.
5. GitHub Secrets sirve para workflows, no para que GitHub Pages o el navegador lean secretos.

## Próximos módulos

- Base de datos.
- Autenticación de administrador.
- Participantes por enlace de invitación.
- Predicciones de marcadores.
- Cierre de predicciones antes del partido.
- Cálculo de puntos.
- Ranking.
- App móvil con banderas de selecciones.
