import Hero from '../components/Hero.jsx'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import ProjetCard from '../components/ProjetCard.jsx'
import { Link } from 'react-router'

export default function Accueil({ profil }) {
  const { data: projets, loading, error } = useApi('/api/projets')

  return (
    <>
      <Hero profil={profil} />
      <section className="accueil-projets" aria-labelledby="accueil-projets-titre">
        <div className="accueil-projets-entete">
          <div>
            <p className="hero-availability">Réalisations</p>
            <h2 className="section-title" id="accueil-projets-titre">Quelques projets</h2>
          </div>
          <Link className="voir-projets" to="/projets">Voir tous les projets →</Link>
        </div>
        {!projets && <Etat loading={loading} error={error} />}
        {projets && (
          <div className="grid">
            {projets.slice(0, 3).map((projet) => (
              <ProjetCard key={projet.slug} projet={projet} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
