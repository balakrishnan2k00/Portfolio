import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { profile } from '../data'

export function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <SectionHeading
        id="about"
        title="About"
        subtitle="Building reliable systems in regulated, cloud-first environments."
      />

      <Reveal>
        <div className="about-grid">
          <article className="glass-panel about-card">
            <h3 id="about-title">Professional summary</h3>
            <p>{profile.summary}</p>
          </article>
          <aside className="glass-panel about-aside">
            <img
              src="./images/bg.jpg"
              alt=""
              className="about-visual"
              loading="lazy"
            />
            <p>
              I collaborate across backend, frontend, design, and operations teams
              to ship secure, observable solutions—from regulatory portals to
              AI-assisted workflows on Azure.
            </p>
          </aside>
        </div>
      </Reveal>
    </section>
  )
}
