import express, {type Request, type Response, type Express } from 'express';
const app: Express = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});