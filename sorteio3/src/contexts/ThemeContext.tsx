import React, { createContext, useState } from 'react';
import { ThemeProps, ProviderProps } from '../types'; // Tipos definidos
import { mega } from '../themes'; // O tema inicial 'mega'

// Criando o contexto para o tema
interface ThemeContextType {
  theme: ThemeProps;
  setTheme: (theme: ThemeProps) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: mega, // O valor inicial do tema
  setTheme: () => {}, // Função vazia, será substituída
});

// O ThemeProvider gerencia o estado do tema e disponibiliza para os filhos
export function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<ThemeProps>(mega); // Tema inicial é 'mega'

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
