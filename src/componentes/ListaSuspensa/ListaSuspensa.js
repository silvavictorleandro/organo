export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={e => props.aoAlterado(e.target.value)} required={props.required} value={props.valor}>
        <option value='' disabled selected>Selecione o seu time</option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
