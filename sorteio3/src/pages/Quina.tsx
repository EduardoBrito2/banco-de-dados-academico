import React from 'react';
import useLottery from '../hooks/useLottery';
import { styled } from 'styled-components';
import LotteryResult2 from '../components/LotteryResultProps2';
import Menu from '../components/Menu';


const Quina: React.FC = () => {
  const { quina, loading, error } = useLottery();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return (
    <Loading>
      <Menu></Menu>
      <Text>Carregando...</Text>
    </Loading>
    );
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return (
    <div>
      {quina && <LotteryResult2 quina={quina.quina}/>}
      <Menu></Menu>
    </div>
  );
};

export default Quina;
const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
`
const Text = styled.div`
  border: 2px, solid;
  padding: 20px;
  height: 230px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`