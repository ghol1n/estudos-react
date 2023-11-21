import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <div>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.nome}>
            <p>{produto.nome}</p>
            <ul>
              {produto.propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
