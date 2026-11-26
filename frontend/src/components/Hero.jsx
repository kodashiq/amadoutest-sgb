export default function Hero({ profil }) {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-copy">
        <p className="hero-availability">{profil.disponibilite}</p>
        <h1>{profil.nom}</h1>
        <p className="hero-title">{profil.titre}</p>
        <p>{profil.accroche}</p>
        <ul className="hero-expertises" aria-label="Domaines d'expertise">
          <li>Gestion de projet</li>
          <li>Performance énergétique</li>
          <li>Bâtiments connectés</li>
        </ul>
      </div>
      <div className="hero-actions" aria-label="Actions principales">
        {profil.email && (
          <a href={`mailto:${profil.email}`}>Me contacter</a>
        )}
        {profil.cv && (
          <a className="btn btn-ghost" href={profil.cv} download>
            Télécharger mon CV (PDF)
          </a>
        )}
        {profil.linkedin && (
          <a className="btn btn-linkedin" href={profil.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
