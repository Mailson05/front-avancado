import React from 'react'

const Produto = ({nome, preco, categoria, quantidade, status}) => {

  return (
    <>
        <p>Nome: {nome}</p>
        <p>Preco: {preco}</p>
        <p>Categoria: {categoria}</p>
        <p>Quantidade: {quantidade}</p>
        <p>Status {quantidade > 0 ? "Disponivel" : "Indisponivel"} </p>
        <p>-------------</p>





    </>
  )
}

export default Produto