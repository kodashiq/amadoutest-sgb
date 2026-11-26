import { useState } from 'react'

export default function BarreRecherche({ valeur, onChange, motsCles = [] }) {
  const [suggestionsOuvertes, setSuggestionsOuvertes] = useState(false)
  const mot = valeur.trim().toLocaleLowerCase()
  const suggestions = [...new Set(motsCles)]
    .filter((motCle) => !mot || motCle.toLocaleLowerCase().includes(mot))

  return (
    <div
      className="recherche"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setSuggestionsOuvertes(false)
        }
      }}
    >
      <label htmlFor="recherche-projets">Rechercher un projet</label>
      <input
        id="recherche-projets"
        className="search-input"
        type="search"
        value={valeur}
        onChange={(event) => {
          onChange(event.target.value)
          setSuggestionsOuvertes(true)
        }}
        onFocus={() => setSuggestionsOuvertes(true)}
        onClick={() => setSuggestionsOuvertes(true)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setSuggestionsOuvertes(false)
        }}
        placeholder="Titre, technologie, résumé ou thème…"
        aria-expanded={suggestionsOuvertes && suggestions.length > 0}
        aria-controls="suggestions-recherche"
      />
      {suggestionsOuvertes && suggestions.length > 0 && (
        <ul className="suggestions-recherche" id="suggestions-recherche" role="listbox" aria-label="Mots-clés suggérés">
          {suggestions.map((motCle) => (
            <li key={motCle}>
              <button
                type="button"
                role="option"
                aria-selected={valeur === motCle}
                onClick={() => {
                  onChange(motCle)
                  setSuggestionsOuvertes(false)
                }}
              >
                {motCle}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
