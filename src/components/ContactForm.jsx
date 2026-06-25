import { useState } from 'react'
import CoordonneesSection from './CoordonneesSection'
import MessageSection from './MessageSection'
import DisponibiliteSection from './DisponibiliteSection'
import { supabase } from '../supabaseClient'
function ContactForm() {
  const [formData, setFormData] = useState({
    civilite: 'Mme',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    typeDemande: '',
    message: '',
    disponibilites: [],
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
async function handleSubmit() {
  const { error } = await supabase
    .from('contacts')
    .insert([{
      civilite: formData.civilite,
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      type_demande: formData.typeDemande,
      message: formData.message,
      disponibilites: formData.disponibilites.join(', '),
    }])

  if (error) {
    alert('Erreur : ' + error.message)
  } else {
    alert('Message envoyé avec succès !')
  }
}
  return (
    <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200')" }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 p-8 text-white">
        <h1 className="text-2xl font-bold mb-6 tracking-widest">CONTACTEZ L'AGENCE</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Colonne gauche */}
          <div>
            <CoordonneesSection data={formData} onChange={handleChange} />
            <DisponibiliteSection data={formData} setFormData={setFormData} />
          </div>

          {/* Colonne droite */}
          <div>
            <MessageSection data={formData} onChange={handleChange} />
          </div>
        </div>

        {/* Bouton Envoyer */}
        <div className="flex justify-end mt-6">
<button
  onClick={handleSubmit}
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded-full tracking-widest"
>
  ENVOYER
</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm