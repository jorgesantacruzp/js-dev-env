import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

/*
 This is NOT for actual production use.
 This is just useful for hosting the minified production
 build for local debugging puposes.
 */
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database.
  res.json([
    {"id": 1, "firstName": "Pepe", "lastName": "Kiehn", "email": "Amelia93@yahoo.com"},
    {"id": 2, "firstName": "Diego", "lastName": "Kilback", "email": "Chanelle_Schowalter@hotmail.com"},
    {"id": 3, "firstName": "Diana", "lastName": "Welch", "email": "Hailey92@gmail.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is listening on port: ' + port);
    open('http://localhost:' + port);
  }
});
