import { useState } from 'react';
import Botao from '../Botao';
import CampoFormulario from '../CampoFormulario';
import ListaSuspensa from '../ListaSuspensa';

export const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })


    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario-container'>
      <form className='formulario' onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoFormulario
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome' 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoFormulario
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo' 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoFormulario
          label='Imagem'
          placeholder='Informe o endereço da imagem' 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Time'
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar card
        </Botao>
      </form>
      <form className='formulario' onSubmit={(e) => {
        e.preventDefault()
        cadastrarTime({ nome: nomeTime, cor: corTime })
        console.log(nomeTime, corTime)
        
        setNomeTime('')
        setCorTime('')
      }}>
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoFormulario
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do time' 
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <CampoFormulario
          obrigatorio={true}
          type='color'
          label='Cor'
          placeholder='Digite a cor do time' 
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>
          Criar time
        </Botao>
      </form>
    </section>
  )
}
