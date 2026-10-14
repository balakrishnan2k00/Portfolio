import { ArrowDown, Github, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>

      <div className="hero-inner reveal visible">
        <div className="hero-card glass-panel">
          <div className="hero-photo-wrap">
            <img
              src="./images/bk.jpg"
              alt="Balakrishnan A"
              className="hero-photo"
              width={160}
              height={160}
            />
            <span className="hero-ring" aria-hidden="true" />
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">Hello Dreamers, I&apos;m</p>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-meta">
              <span>
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Get in touch
              </a>
              <a
                className="btn btn-ghost"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#about">
          <span>Explore</span>
          <ArrowDown size={18} className="bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
