const CURRENT_YEAR = new Date().getFullYear()

export default function Footer({ nom, github, linkedin, email }) {
  return (
    <footer className="footer">
      <p>© {CURRENT_YEAR} {nom}</p>
      <nav className="footer-links" aria-label="Liens de contact">
        {email && <a href={`mailto:${email}`}>E-mail</a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
      </nav>
    </footer>
  )
}
