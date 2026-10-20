const LIBELLES = ['', 'Notions', 'Autonome', 'Avancé']

export default function CompetenceGroupe({ groupe, items }) {
  return (
    <div className="card">
      <h3>{groupe}</h3>
      <ul className="skills">
        {items.map(({ nom, niveau }) => (
          <li key={nom}>
            <span>{nom}</span>
            <span
              className="niveau"
              title={LIBELLES[niveau] || `Niveau ${niveau}`}
              aria-label={LIBELLES[niveau] || `Niveau ${niveau}`}
            >
              {[1, 2, 3].map((n) => (
                <i key={n} className={n <= niveau ? 'on' : ''} aria-hidden="true" />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
