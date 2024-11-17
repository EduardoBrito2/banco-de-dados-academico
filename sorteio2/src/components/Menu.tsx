import { Link } from "react-router-dom";
import styled from 'styled-components';

const Menu: React.FC = () => {
  return (
    <Nav>
      <Button><Link to="/mega">MegaSena</Link></Button>
      <Button><Link to="/quina">Quina</Link></Button>
      <Button><Link to="/time">Timemania</Link></Button>
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
