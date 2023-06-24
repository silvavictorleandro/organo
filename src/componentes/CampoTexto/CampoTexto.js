export const CampoTexto = ({ aoAlterado, label, valor, obrigatorio, placeholder }) => {

  const aoDigitado = (e) => {
    aoAlterado(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>
        {label}
      </label>
      <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
    </div>
  )
}
