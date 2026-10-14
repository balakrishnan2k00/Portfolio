import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const username = 'balakrishnan2k00'
const headers = { 'User-Agent': 'portfolio-site' }

const user = await fetch(`https://api.github.com/users/${username}`, { headers }).then(
  (r) => r.json(),
)
const repos = await fetch(
  `https://api.github.com/users/${username}/repos?sort=pushed&per_page=30&type=owner`,
  { headers },
).then((r) => r.json())

const slim = {
  fetchedAt: new Date().toISOString().slice(0, 10),
  user: {
    login: user.login,
    name: user.name,
    bio: user.bio,
    blog: user.blog,
    location: user.location,
    html_url: user.html_url,
    avatar_url: user.avatar_url,
    public_repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    hireable: user.hireable,
  },
  repos: repos
    .filter((r) => !r.fork)
    .map((r) => ({
      name: r.name,
      description: r.description,
      html_url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      pushed_at: r.pushed_at,
    }))
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    .slice(0, 8),
}

const json = `${JSON.stringify(slim, null, 2)}\n`
writeFileSync(join(root, 'githubdata.txt'), json)
writeFileSync(join(root, 'src', 'githubdata.json'), json)
console.log(`Updated GitHub data (${slim.repos.length} repos).`)
