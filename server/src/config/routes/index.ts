import { Router } from 'express';
import GithubRepositoriesController from '../../controllers/GithubRepositoriesController';

const routes = Router();

routes.get('/', async (request, response) => {
  return response.json(await GithubRepositoriesController.getRepositories("rails", 20));
});

export default routes;
