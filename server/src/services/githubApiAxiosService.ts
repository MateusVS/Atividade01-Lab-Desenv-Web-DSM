import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class GithubApiAxiosService {
  baseUrl = 'https://api.github.com';
  config: AxiosRequestConfig = {
    // headers: {
    //     Authorization: 'Bearer ' + process.env.GITHUB_API_TOKEN as string
    // }
  }

  async getRepositories(repoName: string, quantity: number): Promise<Array<string>> {
    const endpoint = `${this.baseUrl}/search/repositories?q=${repoName}:>1&sort=${repoName}`;

    let response: AxiosResponse<any, any>;

    try {
      response = await axios.get(endpoint, this.config);
    } catch (err: any) {
      return [];
    }

    return response.data.items.slice(0, quantity+1)
  }

  async getRepositoryProgLanguges(repositoryFullName: string): Promise<Array<string>> {
    const endpoint = `${this.baseUrl}/repos/${repositoryFullName}/languages`;

    let response: AxiosResponse<any, any>

    try {
      response = await axios.get(endpoint, this.config)
    } catch (err: any) {
      return []
    }

    if (!response.data && !response.data.length) {
      return []
    }
    return Object.keys(response.data)
  }
}
