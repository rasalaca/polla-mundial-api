import { createApp } from './app.js';
import { config, assertRequiredConfig } from './config.js';

assertRequiredConfig();

const app = createApp();

app.listen(config.port, () => {
  console.log(`[server] API corriendo en http://localhost:${config.port}`);
});
