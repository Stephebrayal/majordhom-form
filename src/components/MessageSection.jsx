function MessageSection({ data, onChange }) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-widest mb-3">VOTRE MESSAGE</h2>

      {/* Type de demande */}
      <div className="flex gap-4 mb-3 flex-wrap">
        {['Demande de visite', 'Être rappelé.e', 'Plus de photos'].map((type) => (
          <label key={type} className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="typeDemande"
              value={type}
              checked={data.typeDemande === type}
              onChange={onChange}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        name="message"
        placeholder="Votre message"
        value={data.message}
        onChange={onChange}
        rows={6}
        className="w-full bg-white/20 placeholder-white/70 text-white rounded px-3 py-2 text-sm outline-none focus:bg-white/30 resize-none"
      />
    </div>
  )
}

export default MessageSection