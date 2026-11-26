const API_URL = import.meta.env.VITE_API_URL ?? ''

export async function api(chemin) {
  const reponse = await fetch(API_URL + chemin)
  const donnees = await reponse.json()
  if (!reponse.ok) throw new Error(donnees.erreur ?? `Erreur ${reponse.status}`)
  return donnees
}
