import { Router } from 'express';
import results from './result';
import a1c from './a1c';
import users from './user';

const routes = Router();

routes.use('/results', results);
routes.use('/a1c', a1c);
routes.use('/users', users);

export default routes;