import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';

export const Time = ({colaboradores, cor, nome, aoDeletar, mudarCor}) => {
  return (
    colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(imagens/fundo.png)', backgroundColor: hexToRgba(cor, '0.6') }}>
      <input type='color' value={cor} onChange={evento => mudarCor(evento.target.value, nome)} className='input-cor' />
      <h3 style={{ borderColor: cor }}>{nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map(colaborador => {
          return <Colaborador corDeFundo={cor} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar}/>
        })}
      </div>
    </section>
  )
}
