import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Colaborador = ({ colaborador, corDeFundo, aoDeletar, favoritarColaborador }) => {

  function favoritar() {
    favoritarColaborador(colaborador.id)
  }

  const propsFavorito = {
    size: 25,
    className: "favoritar-colaborador",
    onClick: favoritar
  }
  
  return(
    <div className="colaborador">
      <AiFillCloseCircle 
        size={25} 
        className="deletar-colaborador" 
        onClick={() => aoDeletar(colaborador.id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div>
          {colaborador.favorito
            ? <AiFillHeart { ...propsFavorito } color='red' />
            : <AiOutlineHeart { ...propsFavorito } />
          }
        </div>
      </div>
    </div>
  )
}
