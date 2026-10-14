import { FolderKanban } from 'lucide-react'
import { projects } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section className="section" aria-labelledby="projects-title">
      <SectionHeading
        id="projects"
        title="Projects"
        subtitle="Selected work across AI platforms, regulatory reporting, and automation."
      />

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 90}>
            <article className="glass-panel project-card">
              <div className="project-head">
                <FolderKanban size={20} aria-hidden="true" />
                <div>
                  <h3>{project.name}</h3>
                  <p className="project-period">{project.period}</p>
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <ul>
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tech-chips" aria-label="Technologies">
                {project.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
