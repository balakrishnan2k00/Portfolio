import { Briefcase } from 'lucide-react'
import { experience } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <SectionHeading
        id="experience"
        title="Experience"
        subtitle="Enterprise delivery for financial services and cloud platforms."
      />

      {experience.map((job, i) => (
        <Reveal key={job.company} delay={i * 100}>
          <article className="glass-panel timeline-card">
            <div className="timeline-icon" aria-hidden="true">
              <Briefcase size={22} />
            </div>
            <div>
              <h3>{job.company}</h3>
              <p className="timeline-role">{job.role}</p>
              <p className="timeline-meta">
                <span>{job.period}</span>
                <span className="dot" aria-hidden="true">·</span>
                <span>{job.client}</span>
              </p>
              <ul className="timeline-list">
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}
