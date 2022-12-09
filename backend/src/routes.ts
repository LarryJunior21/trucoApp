import { Router } from 'express';
import Actions from './app/controller/Actions';
import { generateToken } from './security/jwt';

var json = require('./app/assets/rules.json');

const routes = Router();

// Middleware
routes.use((req, res, next) => {
  const date = new Date();
  console.log('Path:', req.url, 'at', date.toLocaleDateString(), date.toLocaleTimeString());
  next();
});

routes.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'development') res.send('WIP! 💪');
  res.send('Hi!');
});

routes.get('/api/v1/rules', (req, res) => {
  res.status(200).send(json);
});

routes.post('/api/v1/createNewUser', (req, res) => {
  const token = generateToken(req.body.username);
  res.status(200).json({ token: token });
});

routes.post('/api/v1/draw', (req, res) => {
  const number: Number = req.body?.quantity;
  if (number && typeof number === 'number') {
    if (number < 41) {
      const card = Actions.drawCard(number);
      res.status(200).send(card);
    } else {
      res.status(400).send('The quantity must be less than 40');
    }
  } else {
    res.status(400).send('A number type bigger than 0 must be provided as the quantity parameter.');
  }
});

export default routes;
