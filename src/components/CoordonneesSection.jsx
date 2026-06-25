function CoordonneesSection({ data, onChange }) {
  return (<div className="mb-6">
      <h2 className="text-xs font-bold tracking-widest mb-3">VOS COORDONNÉES</h2>

      {/* Mme / M */}
      <div className="flex gap-4 mb-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="civilite"
            value="Mme"
            checked={data.civilite === 'Mme'}
            onChange={onChange}
          />
          Mme
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="civilite"
            value="M"
            checked={data.civilite === 'M'}
            onChange={onChange}
          />
          M
        </label>
      </div>

      {/* Nom / Prénom */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={data.nom}
          onChange={onChange}
          className="w-1/2 bg-white/20 placeholder-white/70 text-white rounded px-3 py-2 text-sm outline-none focus:bg-white/30"
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={data.prenom}
          onChange={onChange}
          className="w-1/2 bg-white/20 placeholder-white/70 text-white rounded px-3 py-2 text-sm outline-none focus:bg-white/30"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Adresse mail"
        value={data.email}
        onChange={onChange}
        className="w-full bg-white/20 placeholder-white/70 text-white rounded px-3 py-2 text-sm outline-none focus:bg-white/30 mb-2"
      />

        {/* Téléphone */}
      <input
        type="tel"
        name="telephone"
        placeholder="Téléphone"
        value={data.telephone}
        onChange={onChange}
        className="w-full bg-white/20 placeholder-white/70 text-white rounded px-3 py-2 text-sm outline-none focus:bg-white/30"
      />
    </div>)
}

export default CoordonneesSection