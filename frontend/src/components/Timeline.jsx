export default function Timeline({ elements }) {
  return (
    <ol className="timeline">
      {elements.map((element) => (
        <li key={`${element.periode}-${element.titre}`} className="timeline-item">
          <span className="timeline-periode">{element.periode}</span>
          <div>
            <span className="timeline-type">{element.type}</span>
            <h3>{element.titre}</h3>
            <p>{element.lieu}</p>
            {element.detail && <p>{element.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}
