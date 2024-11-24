import React from 'react';
import useLottery from '../hooks/useLottery';
import { styled } from 'styled-components';
import LotteryResult3 from '../components/LotteryResultProps3';
import Menu from '../components/Menu';



const Timemania: React.FC = () => {
  const { timemania, loading, error } = useLottery();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return (
    <Loading>
      <Menu></Menu>
      <Text>Carregando...</Text>
    </Loading>
      )
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return (
    <div>
      {timemania && <LotteryResult3 timemania={timemania.timemania}/>}
      <Menu></Menu>
    </div>
    
  );
};

export default Timemania;
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