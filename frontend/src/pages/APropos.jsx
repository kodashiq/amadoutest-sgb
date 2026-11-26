import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import Timeline from '../components/Timeline.jsx'
import PageMeta from '../components/PageMeta.jsx'

export default function APropos({ profil }) {
  const { data: parcours, loading, error } = useApi('/api/parcours')
  const initiales = profil.nom
    .split(' ')
    .map((mot) => mot[0])
    .join('')

  return (
    <section className="page-section apropos">
      <PageMeta
        titre="À propos"
        description="Profil, parcours, langues, compétences et centres d'intérêt d'Amadou Fofana."
      />
      <div className="avatar" aria-label={`Portrait professionnel de ${profil.nom}`}>{initiales}</div>
      <h1 className="section-title">À propos</h1>
      {(profil.apropos ?? []).map((texte) => <p key={texte}>{texte}</p>)}

      <div className="apropos-grid">
        <div className="card">
          <h2>Langues</h2>
          <ul className="apropos-list">
            {(profil.langues ?? []).map((langue) => (
              <li key={langue.langue}><strong>{langue.langue}</strong> — {langue.niveau}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>Centres d'intérêt</h2>
          <ul className="tags">
            {(profil.interets ?? []).map((interet) => <li className="tag" key={interet}>{interet}</li>)}
          </ul>
        </div>
        {profil.permis && (
          <div className="card">
            <h2>Permis</h2>
            <ul className="apropos-list">
              <li>Permis {profil.permis}</li>
            </ul>
          </div>
        )}
      </div>

      <h2>Mon parcours</h2>
      {!parcours && <Etat loading={loading} error={error} />}
      {parcours && <Timeline elements={parcours} />}
    </section>
  )
}
