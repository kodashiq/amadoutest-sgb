export default function BarreRecherche({ valeur, onChange }) {
  return (
    <div className="recherche">
      <label htmlFor="recherche-projets">Rechercher un projet</label>
      <input
        id="recherche-projets"
        className="search-input"
        type="search"
        value={valeur}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Titre, technologie, résumé ou thème…"
      />
    </div>
  )
}
