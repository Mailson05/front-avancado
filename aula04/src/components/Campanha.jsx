import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {
  
  function definirMensagem(mes) {
    if (mes === "setembro"){
        return "Prevenção ao suicido"
    }
    else if (mes === "outubro"){
        return "Conscientezação sobre o cancer de mama"
    } else if (mes === "novembro"){
        return "Prevenção de combate ao câncer de próstata"
    }

  }

  function definirCor (mes){
    if (mes === "setembro"){
        return styles.setembro
    }
    else if (mes === "outubro"){
        return styles.outubro
    } else if (mes === "novembro"){
        return styles.novembro
    }

  }
  
    return (
    <div className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha