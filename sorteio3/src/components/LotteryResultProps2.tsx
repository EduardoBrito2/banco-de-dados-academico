import React from 'react';
import styled from 'styled-components';
import { QuinaProps } from '../types';  // Tipos específicos da Quina

// Tema da Quina diretamente no Sld
const quinaTheme = {
  background: "#260085",  // Cor de fundo da Quina
  color: "#fff",  // Cor do texto da Quina
};

const LotteryResult2: React.FC<QuinaProps> = ({ quina }) => {
  return (
    <Panel>
      <Result>
        <h1>Quina</h1>
        <DezenasContainer>
          {quina.dezenas.map((dezena, index) => (
            <Sld key={index} theme={quinaTheme}>
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

// Sld agora aplica o estilo da Quina diretamente
const Sld = styled.div<{ theme: { background: string; color: string } }>`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  color: ${(props) => props.theme.color};  // Cor do texto (branco)
  background-color: ${(props) => props.theme.background}; // Cor de fundo (roxo)
`;

export default LotteryResult2;
