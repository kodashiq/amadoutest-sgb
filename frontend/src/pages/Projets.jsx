import { useState } from 'react'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import FiltreTags from '../components/FiltreTags.jsx'
import ProjetCard from '../components/ProjetCard.jsx'

export default function Projets() {
  const { data: projets, loading, error } = useApi('/api/projets')
  const [tagActif, setTagActif] = useState('Tous')

  if (!projets) return <Etat loading={loading} error={error} />

  const tags = [...new Set(projets.flatMap((projet) => projet.tags))].sort()
  const visibles = tagActif === 'Tous'
    ? projets
    : projets.filter((projet) => projet.tags.includes(tagActif))

  return (
    <section className="page-section">
      <h1 className="section-title">Projets</h1>
      <FiltreTags tags={tags} actif={tagActif} onChange={setTagActif} />
      <p className="compteur">{visibles.length} projet(s)</p>
      <div className="grid">
        {visibles.map((projet) => <ProjetCard key={projet.slug} projet={projet} />)}
      </div>
    </section>
  )
}
