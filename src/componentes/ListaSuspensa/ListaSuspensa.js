export const ListaSuspensa = ({ label, aoAlterado, valor, itens, obrigatorio }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={e => aoAlterado(e.target.value)} value={valor} required={obrigatorio}>
        <option value="" disabled="disabled">Selecione o seu time</option>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
