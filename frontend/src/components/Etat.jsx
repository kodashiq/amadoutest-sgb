export default function Etat({ loading, error }) {
  if (loading) return <p className="etat">Chargement…</p>
  if (error) return <p className="etat etat-erreur" role="alert">⚠️ {error}</p>
  return null
}
