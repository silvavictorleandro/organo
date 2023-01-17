import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

export const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Submetido')
  }

  return (
    <section>
      <form className='formulario' onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
        <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
        <ListaSuspensa label='Time' itens={times} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}
