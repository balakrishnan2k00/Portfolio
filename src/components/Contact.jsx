import { ExternalLink, Github, Mail } from 'lucide-react'
import { profile } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="section section-contact" aria-labelledby="contact-title">
      <SectionHeading
        id="contact"
        title="Contact"
        subtitle="Open to full-stack, cloud, and AI engineering opportunities."
      />

      <Reveal>
        <div className="contact-card glass-panel">
          <h3 id="contact-title">Let&apos;s connect</h3>
          <p>
            Based in {profile.location}. Reach out for collaborations, consulting,
            or roles where React, .NET, and Azure come together.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              github.com/balakrishnan2k00
            </a>
            {profile.links ? (
              <a href={profile.links} target="_blank" rel="noreferrer">
                <ExternalLink size={18} aria-hidden="true" />
                linktr.ee/balakrishnan2k
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
