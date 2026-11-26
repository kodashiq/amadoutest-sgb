import { useState } from 'react'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import BarreRecherche from '../components/BarreRecherche.jsx'
import FiltreTags from '../components/FiltreTags.jsx'
import ProjetCard from '../components/ProjetCard.jsx'

const texteDe = (projet) => [
  projet.titre,
  projet.resume,
  ...(projet.tags ?? []),
  ...(projet.technos ?? []),
].join(' ').toLowerCase()

export default function Projets() {
  const { data: projets, loading, error } = useApi('/api/projets')
  const [tagActif, setTagActif] = useState('Tous')
  const [recherche, setRecherche] = useState('')
  const [tri, setTri] = useState('recent')

  if (!projets) return <Etat loading={loading} error={error} />

  const tags = [...new Set(projets.flatMap((projet) => projet.tags))].sort()
  const mot = recherche.trim().toLowerCase()
  const visibles = projets
    .filter((projet) => tagActif === 'Tous' || projet.tags.includes(tagActif))
    .filter((projet) => texteDe(projet).includes(mot))
    .sort((a, b) => tri === 'recent' ? b.annee - a.annee : a.annee - b.annee)

  return (
    <section className="page-section">
      <h1 className="section-title">Projets</h1>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <div className="outils-projets">
        <FiltreTags tags={tags} actif={tagActif} onChange={setTagActif} />
        <label className="tri">
          Trier
          <select value={tri} onChange={(event) => setTri(event.target.value)}>
            <option value="recent">Plus récents</option>
            <option value="ancien">Plus anciens</option>
          </select>
        </label>
      </div>
      <p className="compteur" aria-live="polite">{visibles.length} projet(s)</p>
      {visibles.length === 0 && <p className="empty-state">Aucun projet ne correspond à votre recherche.</p>}
      <div className="grid">
        {visibles.map((projet) => <ProjetCard key={projet.slug} projet={projet} />)}
      </div>
    </section>
  )
}
