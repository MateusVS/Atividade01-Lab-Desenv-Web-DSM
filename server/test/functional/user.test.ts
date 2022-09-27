import supertest from 'supertest';

describe('Github`s user profile tests', () => {
  it('should return a user profile informations', async () => {
    const { body, status } = await supertest(app).get('/users/mateusvs');
    expect(status).toBe(200);
    expect(body).toBe({
      "login": "MateusVS",
      "id": 36384659,
      "node_id": "MDQ6VXNlcjM2Mzg0NjU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/36384659?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/MateusVS",
      "html_url": "https://github.com/MateusVS",
      "followers_url": "https://api.github.com/users/MateusVS/followers",
      "following_url": "https://api.github.com/users/MateusVS/following{/other_user}",
      "gists_url": "https://api.github.com/users/MateusVS/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/MateusVS/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/MateusVS/subscriptions",
      "organizations_url": "https://api.github.com/users/MateusVS/orgs",
      "repos_url": "https://api.github.com/users/MateusVS/repos",
      "events_url": "https://api.github.com/users/MateusVS/events{/privacy}",
      "received_events_url": "https://api.github.com/users/MateusVS/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Mateus Vinicius da Silva",
      "company": null,
      "blog": "",
      "location": "Araras, SP",
      "email": null,
      "hireable": null,
      "bio": "Web developer in love with Node.js and React",
      "twitter_username": null,
      "public_repos": 38,
      "public_gists": 0,
      "followers": 26,
      "following": 27,
      "created_at": "2018-02-11T21:17:01Z",
      "updated_at": "2022-09-20T14:04:11Z"
    });
  });
});
