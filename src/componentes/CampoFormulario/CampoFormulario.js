export const CampoFormulario = ({ type = 'text', aoAlterado, label, valor, obrigatorio, placeholder }) => {

  const aoDigitado = (e) => {
    aoAlterado(e.target.value)
  }

  return (
    <div className={`campo-formulario campo-formulario__${type}`}>
      <label>
        {label}
      </label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}
