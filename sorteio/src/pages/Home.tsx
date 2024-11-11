import React from 'react';
import useLottery from '../hooks/useLottery';
import LotteryResult from '../components/LotteryResultProps';


const Home: React.FC = () => {
  const { megasena, loading, error } = useLottery();

  // Exibe mensagem de carregamento enquanto os dados estão sendo carregados
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Exibe mensagem de erro caso a requisição falhe
  if (error) {
    return <div>{error}</div>;
  }

  // Exibe os resultados quando os dados são carregados
  return (
    <div>
      {megasena && <LotteryResult megasena={megasena.megasena} />}
    </div>
  );
};

export default Home;
