import React, { useContext } from 'react';
import styled from 'styled-components';
import { LotteryResultProps } from '../types';
import { ThemeContext } from '../contexts/ThemeContext'; // Importando o contexto de tema
import { mega } from '../themes';

// Componente LotteryResult
const LotteryResult: React.FC<LotteryResultProps> = ({ megasena }) => {


  return (
    <Panel>
      <Result>
        <h1>Mega-Sena</h1>
        {/* <p><strong>Concurso:</strong> {megasena.numeroDoConcurso}</p> */}
        {/* <p><strong>Data do Próximo Concurso:</strong> {megasena.dataProximoConcurso}</p> */}
        {/* <p><strong>Valor do Prêmio:</strong> R$ {megasena.valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p> */}
        <DezenasContainer>
          {megasena.dezenas.map((dezena, index) => (
             <Sld key={index} theme={mega}>
             {dezena}
           </Sld>
          ))}
        </DezenasContainer>
        <p><strong>Data de Apuração:</strong> {megasena.dataApuracao}</p>
      </Result>
    </Panel>
  );
};

// Styled-components com tema
const Result = styled.div<{ theme: { background: string; color: string } }>`
  border: 2px solid;
  padding: 20px;
  height: 230px;
  width: 500px;
  background-color: ${(props) => props.theme?.background || '#f5f5f5'};
  color: ${(props) => props.theme?.color || '#000'};
`;

const Panel = styled.div<{ theme: { background: string; color: string } }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme?.background || '#f5f5f5'};
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

const Sld = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  color: ${mega.color};  
  background-color: ${mega.background}; 
`;

export default LotteryResult;
