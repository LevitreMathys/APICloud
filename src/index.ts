import express from 'express';
import type { Request, Response } from 'express';
import { userRouter } from './user/user.route.js';

export const app = express()

const domainName: string = 'localhost'
const PORT: number = 3000

app.use(express.json())

app.use('/user', userRouter);

app.get('/', async (_req: Request, res: Response) => {
  res.status(200).send('Welcome to HTTP server')
})

app.listen(PORT, () => {
  console.log(
    `Serveur tournant sur le port ${PORT}\nSe rendre sur http://${domainName}:${PORT}`,
  )
})
