export function SectionHeading({ id, title, subtitle }) {
  return (
    <div className="section-heading" id={id}>
      <h2 id={id ? `${id}-heading` : undefined}>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}
