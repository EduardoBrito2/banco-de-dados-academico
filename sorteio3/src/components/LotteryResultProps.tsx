import React from 'react';
import styled from 'styled-components';
import { LotteryResultProps } from '../types';
import Menu from './Menu';



const LotteryResult: React.FC<LotteryResultProps> = ({ megasena }) => {
  return (
    <Panel>
      <Result>
      <h1>Mega-Sena</h1>
      {/* <p><strong>Concurso:</strong> {megasena.numeroDoConcurso}</p> */}
      {/* <p><strong>Data do Próximo Concurso:</strong> {megasena.dataProximoConcurso}</p> */}
      {/* <p><strong>Valor do Prêmio:</strong> R$ {megasena.valorPremio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>  */}
      <DezenasContainer>
        {megasena.dezenas.map((dezena, index) => (
          <Dezena key={index}>
            {dezena}
          </Dezena>
        ))}
      </DezenasContainer>
      <p><strong>Data de Apuração:</strong> {megasena.dataApuracao}</p>
      </Result>
    </Panel>
  );
};

// Styled-components
const Result = styled.div`
border: 2px, solid;
padding: 20px;
height: 230px;
width: 500px;
`

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

const Dezena = styled.span`
  background-color: #209869;
  color: #fff;
  padding: 10px 10px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
`;

export default LotteryResult;
