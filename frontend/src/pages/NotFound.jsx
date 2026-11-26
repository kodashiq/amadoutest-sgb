import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <h1>404 — Page introuvable</h1>
      <p>Cette adresse ne correspond à aucune page du portfolio.</p>
      <Link className="btn-link" to="/">Retour à l'accueil</Link>
    </section>
  )
}
