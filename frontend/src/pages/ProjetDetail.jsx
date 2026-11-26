import { Link, useParams } from 'react-router'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'

export default function ProjetDetail() {
  const { slug } = useParams()
  const { data: projet, loading, error } = useApi(`/api/projets/${slug}`)

  if (!projet) return <Etat loading={loading} error={error} />

  return (
    <article className="detail page-section">
      <Link className="retour" to="/projets">← Retour aux projets</Link>
      {projet.image && <img className="detail-image" src={projet.image} alt={projet.imageAlt ?? ''} />}
      <h1>{projet.titre}</h1>
      {projet.contexte && <><h2>Contexte</h2><p>{projet.contexte}</p></>}
      {projet.realisations && <><h2>Ce que j'ai réalisé</h2><ul>{projet.realisations.map((realisation) => <li key={realisation}>{realisation}</li>)}</ul></>}
      {projet.resultat && <p className="resultat"><strong>Résultat :</strong> {projet.resultat}</p>}
      <p className="technos">{projet.technos.join(' · ')}</p>
    </article>
  )
}
