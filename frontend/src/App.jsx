import { Routes, Route } from 'react-router'
import useApi from './hooks/useApi.js'
import useTheme from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Etat from './components/Etat.jsx'
import Accueil from './pages/Accueil.jsx'
import Projets from './pages/Projets.jsx'
import ProjetDetail from './pages/ProjetDetail.jsx'
import Competences from './pages/Competences.jsx'
import Parcours from './pages/Parcours.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

export default function App() {
  const { data: profil, loading, error } = useApi('/api/profil')
  const [theme, basculerTheme] = useTheme()

  if (!profil) return <Etat loading={loading} error={error} />

  return (
    <>
      <Navbar
        nom={profil.nom}
        theme={theme}
        onToggleTheme={basculerTheme}
      />
      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil profil={profil} />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer nom={profil.nom} github={profil.github} />
    </>
  )
}
