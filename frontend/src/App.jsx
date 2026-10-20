import data from './data/portfolio.json'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjetCard from './components/ProjetCard.jsx'
import CompetenceGroupe from './components/CompetenceGroupe.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const { profil, projets, competences } = data

  return (
    <>
      <Navbar nom={profil.nom} />
      <main className="container">
        <Hero profil={profil} />
        <section id="projets">
          <h2 className="section-title">Projets</h2>
          <div className="grid">
            {projets.map((projet) => (
              <ProjetCard key={projet.slug} projet={projet} />
            ))}
          </div>
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
