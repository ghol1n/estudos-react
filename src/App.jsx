import React, { useState, useEffect } from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = useState(null);
  const [preferencia, setPreferencia] = useState(
    localStorage.getItem('preferencia') || '',
  );

  useEffect(() => {
    if (preferencia) {
      fetchDados(preferencia);
    }
  }, [preferencia]);

  async function fetchDados(preferencia) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${preferencia}`,
    );
    const json = await response.json();
    setDados(json);
  }

  function handleClick(event) {
    const novaPreferencia = event.target.innerText;
    setPreferencia(novaPreferencia);
  }

  return (
    <>
      <h1>Preferência: {preferencia}</h1>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      {dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
