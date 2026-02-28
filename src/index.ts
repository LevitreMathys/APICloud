import { userRouter } from './user/user.route';
import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';

export const app = express();

const PORT: number = Number(process.env.PORT) || 3000;

app.use(cors({
  origin: '*' // remplace par ton URL Vercel plus tard ex: 'https://mon-front.vercel.app'
}));

app.use(express.json());
app.use('/user', userRouter);

app.get('/', async (_req: Request, res: Response) => {
  res.status(200).send('Welcome to HTTP server');
});
console.log('PORT utilisé:', process.env.PORT);

app.listen(PORT, () => {
  console.log(`Serveur tournant sur le port ${PORT}`);
});