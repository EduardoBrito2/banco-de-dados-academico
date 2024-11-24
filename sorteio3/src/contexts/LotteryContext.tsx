import React, { useState, createContext } from "react"; // Importando React, useState e createContext
import { LotteryContextProps, Props, ProviderProps, ThemeProps } from "../types"; // Tipos definidos
import { mega } from "../themes"; // Importando o tema inicial

// Criando o contexto da loteria com o tema incluído
export const LotteryContext = createContext<LotteryContextProps>({
  megasena: undefined, // Inicializando os estados como undefined
  quina: undefined,
  timemania: undefined,
  theme: mega, // Definindo o tema inicial como 'mega'
  setTheme: () => {}, // Função vazia por enquanto
});

// Função para prover o contexto da loteria
export function LotteryProvider({ children }: ProviderProps) {
  // Definindo os estados de cada tipo de loteria
  const [megasena, setMegasena] = useState<Props | undefined>();
  const [quina, setQuina] = useState<Props | undefined>();
  const [timemania, setTimemania] = useState<Props | undefined>();

  // Gerenciando o estado do tema
  const [theme, setTheme] = useState<ThemeProps>(mega); // O tema inicial é 'mega'

  return (
    <LotteryContext.Provider value={{ megasena, quina, timemania, theme, setTheme }}>
      {children}
    </LotteryContext.Provider>
  );
}  