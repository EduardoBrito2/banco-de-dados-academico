import React from 'react';
import useLottery from '../hooks/useLottery';
import LotteryResult from '../components/LotteryResultProps';
import { styled } from 'styled-components';
import LotteryResult2 from '../components/LotteryResultProps2';


const Home: React.FC = () => {
  const { lotofacil,loading, error } = useLottery();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return <Loading>
      <Text>Carregando...</Text>
      </Loading>;
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return (
      <div>
        {lotofacil && <LotteryResult2 lotofacil ={lotofacil?.lotofacil}/>}
      </div>
  );
};

export default Home;
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