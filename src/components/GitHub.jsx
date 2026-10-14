import { ExternalLink, GitFork, Star } from 'lucide-react'
import github from '../githubdata.json'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  })
}

function languageColor(language) {
  const map = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    'C#': '#178600',
    HTML: '#e34c26',
    CSS: '#563d7c',
  }
  return map[language] ?? 'var(--accent-2)'
}

export function GitHub() {
  const { user, repos, fetchedAt } = github

  return (
    <section className="section" aria-labelledby="github-heading">
      <SectionHeading
        id="github"
        title="GitHub"
        subtitle={`Public repos and activity snapshot (updated ${fetchedAt}).`}
      />

      <Reveal>
        <div className="github-layout">
          <aside className="glass-panel github-profile">
            <img
              src={user.avatar_url}
              alt=""
              className="github-avatar"
              width={88}
              height={88}
            />
            <h3>{user.name ?? user.login}</h3>
            <p className="github-bio">{user.bio}</p>
            <dl className="github-stats">
              <div>
                <dt>Repos</dt>
                <dd>{user.public_repos}</dd>
              </div>
              <div>
                <dt>Followers</dt>
                <dd>{user.followers}</dd>
              </div>
              <div>
                <dt>Following</dt>
                <dd>{user.following}</dd>
              </div>
            </dl>
            {user.hireable && <p className="github-hireable">Open to opportunities</p>}
            <div className="github-profile-links">
              <a href={user.html_url} target="_blank" rel="noreferrer">
                @{user.login}
              </a>
              {user.blog ? (
                <a href={user.blog} target="_blank" rel="noreferrer">
                  Links
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </aside>

          <div className="github-repos">
            {repos.map((repo, i) => (
              <article
                key={repo.name}
                className="glass-panel github-repo-card"
                style={{ '--stagger': `${i * 60}ms` }}
              >
                <div className="github-repo-head">
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <span className="github-repo-updated">
                    Updated {formatDate(repo.pushed_at)}
                  </span>
                </div>
                <p>{repo.description || 'No description provided.'}</p>
                <div className="github-repo-meta">
                  {repo.language ? (
                    <span className="github-lang">
                      <span
                        className="github-lang-dot"
                        style={{ background: languageColor(repo.language) }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </span>
                  ) : null}
                  <span>
                    <Star size={14} aria-hidden="true" />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <GitFork size={14} aria-hidden="true" />
                    {repo.forks_count}
                  </span>
                </div>
                {repo.homepage ? (
                  <a
                    className="github-repo-live"
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
