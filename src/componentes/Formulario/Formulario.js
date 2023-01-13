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

  return (
    <section>
      <form className='formulario'>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label='Nome' placeholder='Digite seu nome' />
        <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
        <ListaSuspensa label='Time' itens={times}/>
      </form>
    </section>
  )
}
