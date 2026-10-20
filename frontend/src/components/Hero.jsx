export default function Hero({ profil }) {
  return (
    <section className="hero-section" id="accueil">
      <p className="hero-availability">{profil.disponibilite}</p>
      <h1>{profil.nom}</h1>
      <p className="hero-title">{profil.titre}</p>
      <p>{profil.accroche}</p>
      <a href={profil.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </section>
  )
}
