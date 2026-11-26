import express from 'express'
import cors from 'cors'
import contenu from './routes/contenu.js'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors({ origin: process.env.FRONTEND_URL?.split(',') ?? '*' }))
app.use(express.json())

app.get('/', (_requete, reponse) => {
  reponse.json({ message: 'API Portfolio SGB opérationnelle' })
})
app.use('/api', contenu)

app.use((_requete, reponse) => {
  reponse.status(404).json({ erreur: 'Route inconnue' })
})

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`API disponible sur http://localhost:${port}`)
  })
}

export default app
