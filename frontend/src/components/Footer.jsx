const CURRENT_YEAR = new Date().getFullYear()

export default function Footer({ nom, github }) {
  return (
    <footer className="footer">
      <p>© {CURRENT_YEAR} {nom}</p>
      <a href={github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  )
}
