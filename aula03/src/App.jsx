import React from 'react'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'



const App = () => {
  return (
    <div>
      {
        [
          {nome: "Mailson", email: "mailson@gmail.com", curso: "Sistemas para internet", media: 8},
          {nome: "Mateus", email: "mateus10@gmail.com", curso: "Java", media: 6},
          {nome: "Jose", email: "jose@gmail.com", curso: "Banco de dados", media: 7}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media} />
          
        )
      }
      <br/><br/>
      {
        [
          {nome: "React", dificuldade: "medio"},
          {nome: "Banco de Dados", dificuldade: "medio"}
        ].map((linguagens) =>
          <Linguagens nome={linguagens.nome} dificuldade={linguagens.dificuldade} />
        )//serve para renderizar listas .map
      }
      <h1>----------------</h1>
      {
        [
          {nome: "Liquidificador", preco: 10, categoria: "Portateis", quantidade: 0},
          {nome: "A15 Smartphone", preco: 15, categoria: "Celular", quantidade: 4},
          {nome: "Fritadeira", preco: 20, categoria: "Portateis", quantidade: 2}
        ].map((produto) =>
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria}
           quantidade={produto.quantidade} status={produto.status} />
        )
      }
      
      
    </div>
  )
}

export default App