import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo = {true}/>
      <EstaComSono estaComSono = {false}/>
    </div>
  )
}

export default App