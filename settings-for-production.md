# .env

Set env mode to production:

```bash
NODE_ENV = production
```

<br>

# package.json

Set heroku support:

```json
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
```

<br>

# server.js

Read frontend's build version when environment' set to production:

```javascript
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
