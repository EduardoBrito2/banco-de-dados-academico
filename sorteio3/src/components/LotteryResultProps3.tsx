import React from 'react';
import styled from 'styled-components';
import { TimemaniaProps } from '../types';

// Tema da Timemania diretamente no styled-component
const timemaniaTheme = {
  background: "#FFF600",  // Cor amarela para o fundo
  color: "#049645",  // Cor verde para o texto
};

const LotteryResult3: React.FC<TimemaniaProps> = ({ timemania }) => {
  return (
    <Panel>
      <Result>
        <h1>Timemania</h1>
        <DezenasContainer>
          {timemania.dezenas.map((dezena, index) => (
            <Dezena key={index} theme={timemaniaTheme}>
              {dezena}
            </Dezena>
          ))}
        </DezenasContainer>
        <p><strong>Data de Apuração:</strong> {timemania.dataApuracao}</p>
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

// Sld agora aplica o estilo da Timemania diretamente
const Dezena = styled.span<{ theme: { background: string; color: string } }>`
  background-color: ${(props) => props.theme.background};  // Cor de fundo (amarela)
  color: ${(props) => props.theme.color};  // Cor do texto (verde)
  padding: 10px 10px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
`;

export default LotteryResult3;
