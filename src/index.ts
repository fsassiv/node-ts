import express, { Application, Request, Response } from 'express';

const PORT = 3000;
const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
