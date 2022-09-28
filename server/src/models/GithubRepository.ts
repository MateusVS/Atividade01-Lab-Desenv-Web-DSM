export default class GithubRepository {
  constructor(
    private id: number,
    private name: string,
    private fullName: string,
    private size: number,
    private languages: Array<string>,
    private languages_url: string,
  ) {}
}
