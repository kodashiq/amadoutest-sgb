export default function Navbar({ nom, theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <a className="navbar-brand" href="#accueil">
        {nom}
      </a>
      <nav aria-label="Navigation principale">
        <a href="#projets">Projets</a>
        <a href="#competences">Compétences</a>
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
