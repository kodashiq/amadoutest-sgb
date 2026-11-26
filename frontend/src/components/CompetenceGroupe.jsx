export default function CompetenceGroupe({ groupe, items }) {
  return (
    <div className="card">
      <h3>{groupe}</h3>
      <ul className="skills">
        {items.map((competence) => <li key={competence}>{competence}</li>)}
      </ul>
    </div>
  )
}
