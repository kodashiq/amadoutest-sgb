import { useEffect, useState } from 'react'
import { api } from '../api.js'

export default function useApi(chemin) {
  const [etat, setEtat] = useState({ chemin, data: null, loading: true, error: null })

  useEffect(() => {
    let annule = false

    api(chemin)
      .then((donnees) => {
        if (!annule) setEtat({ chemin, data: donnees, loading: false, error: null })
      })
      .catch((erreur) => {
        if (!annule) setEtat({ chemin, data: null, loading: false, error: erreur.message })
      })

    return () => { annule = true }
  }, [chemin])

  if (etat.chemin !== chemin) {
    return { data: null, loading: true, error: null }
  }

  return { data: etat.data, loading: etat.loading, error: etat.error }
}
