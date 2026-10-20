export default function Navbar({ nom }) {
  return (
    <header className="navbar">
      <a className="navbar-brand" href="#accueil">
        {nom}
      </a>
      <nav aria-label="Navigation principale">
        <a href="#projets">Projets</a>
        <a href="#competences">Compétences</a>
      </nav>
    </header>
  )
}
