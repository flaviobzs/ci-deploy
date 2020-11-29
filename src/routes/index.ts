import { Router } from 'express';
import clientRouter from './client.routes';

const routes = Router();

routes.use('/', clientRouter);

export default routes;
