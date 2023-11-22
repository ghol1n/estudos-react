import React from 'react';

const Produto = ({ dados }) => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {global.dados &&
        global.dados.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
    </div>
  );
};

export default Produto;
