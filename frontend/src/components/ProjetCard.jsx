import { Link } from 'react-router'

export default function ProjetCard({ projet }) {
  const { titre, resume, tags, annee, technos, image, imageAlt } = projet

  return (
    <article className="card projet-card">
      {image && (
        <img
          className="projet-image"
          src={image}
          alt={imageAlt ?? ''}
          width="800"
          height="450"
          loading="lazy"
        />
      )}
      <div className="projet-head">
        <h3><Link to={`/projets/${projet.slug}`}>{titre}</Link></h3>
        <span className="annee">{annee}</span>
      </div>
      <p>{resume}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
      <p className="technos">{technos.join(' · ')}</p>
    </article>
  )
}
