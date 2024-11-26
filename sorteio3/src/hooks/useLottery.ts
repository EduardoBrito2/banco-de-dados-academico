import { useState, useEffect } from 'react';
import { LotteryProps, ThemeProps } from '../types';
import lottery from '../services/Lottery';
import { mega, quina, timemania } from '../themes'; // Importando os temas

const useLottery = () => {
  const [megasena, setMegasena] = useState<LotteryProps | null>(null);
  const [quina, setQuina] = useState<LotteryProps | null>(null);
  const [timemania, setTimemania] = useState<LotteryProps | null>(null);
  const [theme, setTheme] = useState<ThemeProps | null>(mega); // Definindo mega como tema inicial
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultado = async () => {
      try {
        // Carregando os dados das loterias
        const data = await lottery.get(); // Exemplo para Mega-Sena
        setMegasena(data);

        const quinaData = await lottery.get(); // Exemplo para Quina
        setQuina(quinaData);

        const timemaniaData = await lottery.get(); // Exemplo para Timemania
        setTimemania(timemaniaData);

        // Definindo o tema baseado em algum critério
        // Exemplo: Aqui você pode definir qual tema usar com base na loteria carregada
        // Para fins de demonstração, vou escolher um tema aleatório:
        setTheme(mega);  // Definindo o tema para Mega-Sena (poderia ser baseado na loteria ou outra lógica)

      } catch (err) {
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    fetchResultado();
  }, []); // A dependência vazia [] garante que o useEffect será executado apenas uma vez

  return { setTheme, theme, timemania, quina, megasena, loading, error };
};

export default useLottery;
