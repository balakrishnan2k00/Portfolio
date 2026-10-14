import { SkillIcon } from '../skillIcons'

export function SkillTile({ name, label, accent }) {
  const tip = label ?? name

  return (
    <span
      className="skill-icon-tile"
      style={{ '--lane-accent': accent }}
      title={tip}
    >
      <span className="skill-icon-tile__glyph">
        <SkillIcon name={name} size={24} />
      </span>
      <span className="skill-icon-tile__label">{tip}</span>
    </span>
  )
}
