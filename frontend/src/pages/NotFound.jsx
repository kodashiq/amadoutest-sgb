import { Link } from 'react-router'
import PageMeta from '../components/PageMeta.jsx'

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <PageMeta titre="Page introuvable" description="Cette page du portfolio n'existe pas." />
      <h1>404 — Page introuvable</h1>
      <p>Cette adresse ne correspond à aucune page du portfolio.</p>
      <Link className="btn-link" to="/">Retour à l'accueil</Link>
    </section>
  )
}
