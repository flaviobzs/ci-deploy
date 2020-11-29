import { Router, Request, Response } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';

const clientRouter = Router();

clientRouter.post('/', async (request: Request, response: Response) => {
  try {
    const repo = getRepository(Client);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});
clientRouter.get('/teste', async (request: Request, response: Response) => {
  return response.status(201).json({ ff: 'hello word' });
});

clientRouter.get('/', async (request: Request, response: Response) => {
  response.json(await getRepository(Client).find());
});

clientRouter.get('/:name', async (request: Request, response: Response) => {
  const repository = getCustomRepository(ClientRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default clientRouter;
