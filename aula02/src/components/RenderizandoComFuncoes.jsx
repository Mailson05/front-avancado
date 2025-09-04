import React from 'react'

const RenderizandoComFuncoes = () => {

    function oQueRenderiza(estado){
        if(estado === "PB"){
            return <h1>João Pessoa</h1>
        } else {
            return <h2>Recife</h2>
        }
    }

    return (
    <div>
        {oQueRenderiza("PB")}
    </div>
  )
}

export default RenderizandoComFuncoes