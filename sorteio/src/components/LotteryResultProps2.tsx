import React from 'react';
import { LotoProps } from '../types';
import { styled } from 'styled-components';

const LotteryResult2: React.FC<LotoProps> = ({ lotofacil }) => {
  return (
    <Panel>
      <Result>
        <h1>{lotofacil && <Title>Loto-fácil</Title>}</h1>
        <DezenasContainer>
          {lotofacil.dezenas.map((dezena, index) => (
            <Dezena key={index}>{dezena}</Dezena>
          ))}
        </DezenasContainer>
        <Date>
          <strong>Data de Apuração:</strong> {lotofacil.dataApuracao}
        </Date>
          <strong>Ganhadores:</strong> {lotofacil.quantidadeGanhadores}
      </Result>
    </Panel>
  );
};

const Result = styled.div`
  border: 2px solid #ddd; /* Cor da borda */
  padding: 20px;
  height: 230px;
  width: 500px;
  background-color: #fff; /* Cor de fundo interna */
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

const Title = styled.h1`
  color: #930089; /* Cor do título */
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
  background-color: #930089; /* Cor de fundo das dezenas */
  color: #fff; /* Cor do texto */
  padding: 10px 10px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const Date = styled.p`
  color: #4c556c; /* Cor da data do concurso */
  font-size: 16px;
  margin-top: 10px;
`;

export default LotteryResult2;
