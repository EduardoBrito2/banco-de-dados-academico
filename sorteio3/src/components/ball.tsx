import styled from 'styled-components';

// O tema será automaticamente inferido pela tipagem do DefaultTheme
export const Sld = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 25px;
  color: ${(props) => props.theme.color};  // Acessando a cor do tema
  background-color: ${(props) => props.theme.background};  // Acessando o fundo do tema
`;
