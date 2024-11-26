import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProps } from '../types'; // Tipos definidos
import { mega, quina, timemania } from '../themes'; // Importando os temas

// Criando o contexto para o tema
interface ThemeContextType {
  theme: ThemeProps;
  setTheme: (newTheme: 'mega' | 'quina' | 'timemania') => void;
}

// Definição do tipo para as props do ThemeProvider, incluindo a prop 'theme'
interface ThemeProviderProps {
  theme: ThemeProps; // Prop que receberá o tema
  children: ReactNode; // Filhos que serão renderizados
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: mega, // Valor inicial do tema (mega)
  setTheme: () => {}, // Função vazia
});

// O ThemeProvider gerencia o estado do tema e disponibiliza para os filhos
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>(theme); // Estado para armazenar o tema

  // Função para alterar o tema
  const changeTheme = (newTheme: 'mega' | 'quina' | 'timemania') => {
    switch (newTheme) {
      case 'mega':
        setCurrentTheme(mega); // Alterando para o tema da Mega-Sena
        break;
      case 'quina':
        setCurrentTheme(quina); // Alterando para o tema da Quina
        break;
      case 'timemania':
        setCurrentTheme(timemania); // Alterando para o tema da Timemania
        break;
      default:
        setCurrentTheme(mega); // Fallback para Mega-Sena
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
