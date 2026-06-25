import { useState } from 'react'

const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const HEURES = Array.from({ length: 24 }, (_, i) => `${i}h`)
const MINUTES = ['0m', '15m', '30m', '45m']

function DisponibilitesSection({ data, setFormData }) {
  const [jour, setJour] = useState('Lundi')
  const [heure, setHeure] = useState('9h')
  const [minute, setMinute] = useState('0m')

  function ajouterDispo() {
    const nouvelle = `${jour} à ${heure}${minute}`
    setFormData(prev => ({
      ...prev,
      disponibilites: [...prev.disponibilites, nouvelle]
    }))
  }

  function supprimerDispo(index) {
    setFormData(prev => ({
      ...prev,
      disponibilites: prev.disponibilites.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="mt-4">
      <h2 className="text-xs font-bold tracking-widest mb-3">DISPONIBILITÉS POUR UNE VISITE</h2>

      {/* Sélecteurs */}
      <div className="flex gap-2 items-center flex-wrap">
        <select
          value={jour}
          onChange={e => setJour(e.target.value)}
          className="bg-white/20 text-white rounded px-2 py-1 text-sm outline-none"
        >
          {JOURS.map(j => <option key={j} value={j} className="text-black">{j}</option>)}
        </select>

        <select
          value={heure}
          onChange={e => setHeure(e.target.value)}
          className="bg-white/20 text-white rounded px-2 py-1 text-sm outline-none"
        >
          {HEURES.map(h => <option key={h} value={h} className="text-black">{h}</option>)}
        </select>

        <select
          value={minute}
          onChange={e => setMinute(e.target.value)}
          className="bg-white/20 text-white rounded px-2 py-1 text-sm outline-none"
        >
          {MINUTES.map(m => <option key={m} value={m} className="text-black">{m}</option>)}
        </select>

        <button
          onClick={ajouterDispo}
          className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-3 py-2 rounded-full"
        >
          AJOUTER DISPO
        </button>
      </div>

      {/* Tags des dispos ajoutées */}
      <div className="flex flex-wrap gap-2 mt-3">
        {data.disponibilites.map((dispo, index) => (
          <span
            key={index}
            className="bg-white/20 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2"
          >
            {dispo}
            <button
              onClick={() => supprimerDispo(index)}
              className="hover:text-red-400"
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}

export default DisponibilitesSection