export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        © {year} Balakrishnan A · Crafted with React &amp; Vite
      </p>
    </footer>
  )
}
