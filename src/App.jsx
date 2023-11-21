import React, { useState } from 'react';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  const handleNavigation = (newPath) => {
    setPath(newPath);
    window.history.pushState({}, '', newPath);
  };

  return (
    <div>
      {/* Botões de navegação */}
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/produtos')}>
              Produtos
            </button>
          </li>
        </ul>
      </nav>

      {path === '/' ? <Home /> : <Produtos />}
    </div>
  );
};

export default App;
