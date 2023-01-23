export const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.value}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}