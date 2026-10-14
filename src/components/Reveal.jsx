import { useInView } from '../hooks/useInView'

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}
