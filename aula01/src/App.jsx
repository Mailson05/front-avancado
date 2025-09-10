import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Divisao from './components/divisao'
import Multiplicacao from './components/multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2} />
      <Subtracao num1={4} num2={2} />
      <Divisao num1={10} num2={2} />
      <Multiplicacao num1={10} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </div>
  )
}

export default App