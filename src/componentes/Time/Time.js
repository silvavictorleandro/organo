import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';

export const Time = ({colaboradores, time, aoDeletar, mudarCor, favoritarColaborador }) => {
  return (
    colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
      <input type='color' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} className='input-cor' />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map((colaborador,indice) => {
          return  <Colaborador
                    favoritarColaborador={favoritarColaborador}
                    corDeFundo={time.cor} 
                    key={indice} 
                    colaborador={colaborador}
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    aoDeletar={aoDeletar}
                 />
        })}
      </div>
    </section>
  )
}
