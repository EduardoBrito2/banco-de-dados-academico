import React from 'react';
import Loto from './Loto';
import Home from './Home';

const App: React.FC = () => {
  return (
    <div>
      {/* Título centralizado */}
      <h1 style={{ textAlign: 'center' }}>Resultados das Loterias</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Renderiza o componente Loto à esquerda e Home à direita */}
        <div style={{ width: '45%' }}>
          <Loto />
        </div>
        <div style={{ width: '45%' }}>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
