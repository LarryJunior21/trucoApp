import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import ratelimit from 'express-rate-limit';

dotenv.config();

const app = express();

app.use(express.json());

const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: process.env.API_URL,
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const limit = ratelimit({
  windowMs: 1000,
  max: 1,
});

app.use(limit);
app.use(routes);
app.listen(3000);
