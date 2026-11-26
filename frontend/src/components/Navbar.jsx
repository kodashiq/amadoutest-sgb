import { Link, NavLink } from 'react-router'

export default function Navbar({ nom, theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <Link className="navbar-brand" to="/">
        {nom}
      </Link>
      <nav aria-label="Navigation principale">
        <NavLink to="/projets">Projets</NavLink>
        <NavLink to="/competences">Compétences</NavLink>
        <NavLink to="/parcours">Parcours</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'sombre' ? 'Activer le thème clair' : 'Activer le thème sombre'}
        >
          {theme === 'sombre' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
