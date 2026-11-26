import { readFileSync } from 'node:fs'

function lireJson(relativeUrl) {
  return JSON.parse(readFileSync(new URL(relativeUrl, import.meta.url), 'utf8'))
}

export const profil = lireJson('../data/profil.json')
export const projets = lireJson('../data/projets.json')
export const competences = lireJson('../data/competences.json')
export const parcours = lireJson('../data/parcours.json')
