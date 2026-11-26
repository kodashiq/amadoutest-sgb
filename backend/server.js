import express from 'express'
import cors from 'cors'
import { readFile } from 'node:fs/promises'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (_requete, reponse) => {
  reponse.json({ statut: 'ok' })
})

app.get('/api/projects', async (_requete, reponse) => {
  try {
    const contenu = await readFile(new URL('./data/projects.json', import.meta.url), 'utf8')
    reponse.json(JSON.parse(contenu))
  } catch (_erreur) {
    reponse.status(500).json({ erreur: 'Impossible de lire les projets.' })
  }
})

app.listen(port, () => {
  console.log(`API disponible sur http://localhost:${port}`)
})
