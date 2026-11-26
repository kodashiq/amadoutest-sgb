export default function FiltreTags({ tags, actif, onChange }) {
  return (
    <div className="filtres" aria-label="Filtrer les projets par thème">
      {['Tous', ...tags].map((tag) => (
        <button
          key={tag}
          type="button"
          className={tag === actif ? 'filtre actif' : 'filtre'}
          aria-pressed={tag === actif}
          onClick={() => onChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
