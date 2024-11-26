import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from "react";  // Importando useContext
import { LotteryContext } from "../contexts/LotteryContext"; // Importando o contexto
import { mega, quina, timemania } from "../themes";  // Importando os temas
import { ThemeProps } from "../types";


const Menu: React.FC = () => {
  // Consumindo o contexto para pegar a função setTheme
  const { setTheme } = useContext(LotteryContext);

  // Função para definir o tema
  function handleSetTheme(theme: ThemeProps) {
    setTheme(theme); // Atualiza o tema no contexto
  }

  return (
    <Nav>
      <Button>
        <Link to="/mega" onClick={() => handleSetTheme(mega)}>
          MegaSena
        </Link>
      </Button>
      <Button>
        <Link to="/quina" onClick={() => handleSetTheme(quina)}>
          Quina
        </Link>
      </Button>
      <Button>
        <Link to="/time" onClick={() => handleSetTheme(timemania)}>
          Timemania
        </Link>
      </Button>
    </Nav>
  );
};

export default Menu;

// Styled components
const Nav = styled.nav`
  position: fixed; /* Fixa o menu na parte superior da tela */
  top: 0;
  right: 0;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end; /* Alinha os botões à direita */
  gap: 15px; /* Adiciona espaçamento entre os botões */
  z-index: 1000; /* Garante que o menu fique sobre outros elementos */
`;

const Button = styled.div`
  button {
    background-color: #808080; /* Cor de fundo cinza */
    color: white; /* Cor do texto branca */
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: 2px solid white; /* Borda sólida de 2px, cor branca */
    border-radius: 5px;
    text-decoration: none; /* Remove o underline do Link */
  }

  /* Garantir que o link dentro do botão tenha o estilo correto */
  a {
    color: white; /* Cor do link é branca */
    background-color: #808080;
    text-decoration: none; /* Remove o underline do Link */
    border: 2px solid;
    border-radius: 10px;
  }
`;
