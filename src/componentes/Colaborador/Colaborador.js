import {AiFillCloseCircle} from 'react-icons/ai';

export const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar }) => {
  return(
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt='Imagem do colaborador' />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}
