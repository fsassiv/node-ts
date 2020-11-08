// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({ extensions: ['.js', '.ts'] });

import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(helmet());
app.use(morgan('tiny'));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!').status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}. API endpoint http://localhost:3000`);
});
