import React, { useContext } from 'react';
import styled from 'styled-components';
import { QuinaProps } from '../types';  // Tipos específicos da Quina
import { quina } from '../themes';  // Importando o tema da Quina
import { ThemeContext } from '../contexts/ThemeContext';

const LotteryResult2: React.FC<QuinaProps> = ({ quina }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Panel>
      <Result>
        <h1>Quina</h1>
        <DezenasContainer>
          {quina.dezenas.map((dezena, index) => (
            <Sld key={index} theme={quina}>
              {dezena}
            </Sld>
          ))}
        </DezenasContainer>
        <p><strong>Data de Apuração:</strong> {quina.dataApuracao}</p>
      </Result>
    </Panel>
  );
};

// Styled-components
const Result = styled.div`
  border: 2px solid;
  padding: 20px;
  height: 230px;
  width: 500px;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
`;

const DezenasContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 40px;
`;

// Sld agora usa o tema importado diretamente no próprio styled-component
const Sld = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  color: ${quina.color};  
  background-color: ${quina.background}; 
`;

export default LotteryResult2;
