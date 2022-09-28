import GithubRepository from '../models/GithubRepository';
import GithubApiAxiosService from '../services/githubApiAxiosService';

class GithubRepositoriesController {
  async getRepositories(repoName: string, quantity = 20): Promise<Array<GithubRepository>> {
    const repositoriesService = new GithubApiAxiosService();

    const repositories = await repositoriesService.getRepositories(repoName, quantity);

    const repositoriesList = await Promise.all(repositories.map(async (repository: any): Promise<GithubRepository> => {
      const languages = await repositoriesService.getRepositoryProgLanguges(repository.full_name);

      const { id, name, fullName, size, languages_url } = repository;

      const repositoryResult = new GithubRepository(id, name, fullName, size, languages, languages_url);

      return repositoryResult;
    }));

    return repositoriesList;
  }
}

export default new GithubRepositoriesController();
