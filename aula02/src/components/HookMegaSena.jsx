import React from 'react';
import { useState } from 'react';

const HookMegaSena = () => {
  const [numerosSorteado, setNumerosSorteado] = useState([]);

  const [ultimoNumeroSorteado, setUltimoNumeroSorteado] = useState(null);

  function sortearNumero() {
    if (numerosSorteado.length >= 6) {
      alert("Já temos os 6 números sorteados!");
      return;
    }

    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 60) + 1;
    } while (numerosSorteado.includes(novoNumero));

    setUltimoNumeroSorteado(novoNumero);

    setNumerosSorteado([...numerosSorteado, novoNumero]);
  }

  return (
    <div>
      <h1>Sorteador da Mega em React!</h1>
      <button onClick={sortearNumero}>Sortear Número</button>
      <h2>Último Número sorteado: {ultimoNumeroSorteado !== null ? ultimoNumeroSorteado : ''}</h2>
      <h2>Sorteados: {numerosSorteado.join(' - ')}</h2>
    </div>
  );
};

export default HookMegaSena;

