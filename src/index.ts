import Express from 'express';
import cors from 'cors';
import mountAPI from './api';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.static('public'));

mountAPI(app);

app.listen(3000, () => {
  console.log('Server started');
});
