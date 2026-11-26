export default function Hero({ profil }) {
  return (
    <section className="hero-section" id="accueil">
      <p className="hero-availability">{profil.disponibilite}</p>
      <h1>{profil.nom}</h1>
      <p className="hero-title">{profil.titre}</p>
      <p>{profil.accroche}</p>
      <div className="hero-actions">
        {profil.cv && (
          <a className="btn btn-ghost" href={profil.cv} download>
            Télécharger mon CV (PDF)
          </a>
        )}
        <a href={profil.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}
