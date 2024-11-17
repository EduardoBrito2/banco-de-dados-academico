import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Quina from '../pages/Quina';
import Timemania from '../pages/Timemania';

export default function LotteryRoute() {
  return (
    <BrowserRouter>
      {/* Definindo as rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mega" element={<Home />} />
        <Route path="/quina" element={<Quina />} />
        <Route path="/time" element={<Timemania />} />
      </Routes>
    </BrowserRouter>
  );
}
