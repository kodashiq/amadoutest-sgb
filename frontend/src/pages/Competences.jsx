import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import CompetenceGroupe from '../components/CompetenceGroupe.jsx'
import PageMeta from '../components/PageMeta.jsx'

export default function Competences() {
  const { data: competences, loading, error } = useApi('/api/competences')

  if (!competences) return <Etat loading={loading} error={error} />

  return (
    <section className="page-section">
      <PageMeta
        titre="Compétences"
        description="Compétences d'Amadou Fofana en Smart Building, gestion de projet et énergie."
      />
      <h1 className="section-title">Compétences</h1>
      <div className="grid">
        {competences.map(({ groupe, items }) => (
          <CompetenceGroupe key={groupe} groupe={groupe} items={items} />
        ))}
      </div>
    </section>
  )
}
