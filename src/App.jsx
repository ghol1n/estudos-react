import React, { useState } from 'react';

const App = () => {
  const [json, setJson] = useState({ value: null, isActive: false });

  async function fetchProduto(url) {
    setJson({ value: null, isActive: false });
    const response = await fetch(url);
    const data = await response.json();
    setJson({ value: data, isActive: true });
  }

  return (
    <div>
      <button
        onClick={() =>
          fetchProduto('https://ranekapi.origamid.dev/json/api/produto/tablet')
        }
      >
        Tablet
      </button>
      <button
        onClick={() =>
          fetchProduto(
            'https://ranekapi.origamid.dev/json/api/produto/smartphone',
          )
        }
      >
        Smartphone
      </button>
      <button
        onClick={() =>
          fetchProduto(
            'https://ranekapi.origamid.dev/json/api/produto/notebook',
          )
        }
      >
        Notebook
      </button>
      {!json.isActive && <div>Carregando...</div>}
      {json.isActive && json.value && (
        <div>
          <h1>{json.value.nome}</h1>
          <p>{json.value.descricao}</p>
        </div>
      )}
    </div>
  );
};

export default App;
