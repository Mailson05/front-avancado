import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementar() {
        setContador(contador+1)
    }
    function decrementar() {
        setContador(contador-1)
    }

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementar}>Incrementar contador </button>
        <br />
        <br />
        <button onClick={decrementar}>Decrementar contador</button>
        <h1>O contador esta em : {contador}</h1>
        
    </div>
  )
}

export default HookContador