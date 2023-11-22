import React from 'react';
import Produto from './Produto';

const App = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
      console.log(...cores);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
      console.log(...cores);
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input type="checkbox" value={cor} onChange={handleChange} />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
