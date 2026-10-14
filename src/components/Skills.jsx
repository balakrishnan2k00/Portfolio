import { useState } from 'react'
import { skillGroups } from '../data'
import { getUniqueSkillTiles, SkillIcon } from '../skillIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SkillTile } from './SkillTile'

const tabs = [
  { id: 'all', label: 'Overview' },
  ...skillGroups.map((g) => ({ id: g.id, label: g.title })),
]

function IconCategoryRow({ group }) {
  const tiles = getUniqueSkillTiles(group.items)

  return (
    <div className="skills-category-row" aria-label={group.title}>
      <span className="skills-lane-label">{group.title}</span>
      <div
        className="skills-icon-row"
        style={{ '--lane-accent': group.accent }}
      >
        {tiles.map((tile) => (
          <SkillTile
            key={`${group.id}-${tile.name}`}
            name={tile.name}
            label={tile.label}
            accent={group.accent}
          />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [active, setActive] = useState('all')
  const activeGroup = skillGroups.find((g) => g.id === active)

  return (
    <section className="section" aria-labelledby="skills-heading">
      <SectionHeading
        id="skills"
        title="Skills"
        subtitle="Overview shows one icon per technology — hover for names, or open a category for the full list."
      />

      <Reveal>
        <div className="skills-stage glass-panel">
          <div
            className="skills-tabs"
            role="tablist"
            aria-label="Skill categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                className={`skills-tab ${active === tab.id ? 'skills-tab--active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {active === 'all' ? (
            <div className="skills-overview">
              <p className="skills-marquee-hint">
                Each icon appears once per category. Shared stacks show combined labels on hover.
              </p>
              {skillGroups.map((group) => (
                <IconCategoryRow key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div
              className="skills-focus"
              role="tabpanel"
              style={{ '--lane-accent': activeGroup?.accent }}
            >
              <h3 className="skills-focus-title">{activeGroup?.title}</h3>
              <ul className="skills-focus-grid skills-focus-grid--detailed">
                {activeGroup?.items.map((item, i) => (
                  <li
                    key={item}
                    className="skill-detail-card"
                    style={{ '--stagger': `${i * 45}ms` }}
                  >
                    <span className="skill-detail-card__icon">
                      <SkillIcon name={item} size={22} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
