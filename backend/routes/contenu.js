import { Router } from 'express'
import { profil, projets, competences, parcours } from '../lib/donnees.js'

const router = Router()

router.get('/profil', (_requete, reponse) => reponse.json(profil))
router.get('/projets', (requete, reponse) => {
  const { tag } = requete.query
  if (!tag) return reponse.json(projets)
  reponse.json(projets.filter((projet) => projet.tags.includes(tag)))
})
router.get('/projets/:slug', (requete, reponse) => {
  const projet = projets.find((item) => item.slug === requete.params.slug)
  if (!projet) return reponse.status(404).json({ erreur: 'Projet introuvable' })
  reponse.json(projet)
})
router.get('/competences', (_requete, reponse) => reponse.json(competences))
router.get('/parcours', (_requete, reponse) => reponse.json(parcours))

export default router
