# Roteiro

<br>

1º Configurar variável de ambiente NODE para produção em `.env`:

```bash
NODE_ENV = production
```

<br>

2º Configurar suporte do Heroku ao Node.js em `package.json`:

```json
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
```

<br>

3º Ler versão de produção do frontend quando em modo de produção em `server.js`:

```javascript
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
};
```

<br>

## Sources
- https://devcenter.heroku.com/articles/nodejs-support
