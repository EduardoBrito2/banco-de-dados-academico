import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quina from '../pages/Quina';
import Timemania from '../pages/Timemania';
import { LotteryProvider } from '../contexts/LotteryContext'; // Importando o LotteryProvider
import { ThemeProvider } from '../contexts/ThemeContext'; // Importando o ThemeProvider
import Menu from '../components/Menu'; // Menu de navegação

export default function LotteryRoute() {
  return (
    <ThemeProvider> {/* ThemeProvider envolve o tema */}
      <LotteryProvider> {/* LotteryProvider envolve os dados da loteria */}
        <BrowserRouter>
          <Menu /> {/* Aqui você pode incluir o Menu para navegar entre os temas */}
          {/* Definindo as rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mega" element={<Home />} />
            <Route path="/quina" element={<Quina />} />
            <Route path="/time" element={<Timemania />} />
          </Routes>
        </BrowserRouter>
      </LotteryProvider>
    </ThemeProvider>
  );
}
