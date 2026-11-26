import { useState } from 'react'
import useTheme from './hooks/useTheme.js'
import data from './data/portfolio.json'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjetCard from './components/ProjetCard.jsx'
import CompetenceGroupe from './components/CompetenceGroupe.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const { profil, projets, competences } = data
  const [recherche, setRecherche] = useState('')
  const [theme, basculerTheme] = useTheme()

  const mot = recherche.trim().toLowerCase()
  const visibles = projets.filter((projet) => {
    const texte = [
      projet.titre,
      projet.resume,
      ...(projet.tags ?? []),
      ...(projet.technos ?? []),
    ].join(' ').toLowerCase()

    return texte.includes(mot)
  })

  return (
    <>
      <Navbar
        nom={profil.nom}
        theme={theme}
        onToggleTheme={basculerTheme}
      />
      <main className="container">
        <Hero profil={profil} />
        <section id="projets">
          <h2 className="section-title">Projets</h2>
          <input
            className="search-input"
            type="search"
            value={recherche}
            onChange={(event) => setRecherche(event.target.value)}
            placeholder="Rechercher un projet, une technologie ou un domaine…"
            aria-label="Rechercher dans les projets"
          />
          <div className="grid">
            {visibles.map((projet) => (
              <ProjetCard key={projet.slug} projet={projet} />
            ))}
          </div>
          {visibles.length === 0 && (
            <p className="empty-state">Aucun projet ne correspond à votre recherche.</p>
          )}
        </section>
        <section id="competences">
          <h2 className="section-title">Compétences</h2>
          <div className="grid">
            {competences.map(({ groupe, items }) => (
              <CompetenceGroupe key={groupe} groupe={groupe} items={items} />
            ))}
          </div>
        </section>
      </main>
      <Footer nom={profil.nom} github={profil.github} />
    </>
  )
}
