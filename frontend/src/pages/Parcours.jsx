import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import Timeline from '../components/Timeline.jsx'

export default function Parcours() {
  const { data: parcours, loading, error } = useApi('/api/parcours')

  if (!parcours) return <Etat loading={loading} error={error} />

  return (
    <section className="page-section">
      <h1 className="section-title">Parcours</h1>
      <Timeline elements={parcours} />
    </section>
  )
}
