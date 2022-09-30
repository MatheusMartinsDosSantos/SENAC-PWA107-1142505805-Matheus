 import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import React from 'react';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Simulacao from './pages/Simulacao';
import Movimentacao from './pages/Movimentacao';
import Header from './components/Header';
function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/"      element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/movimentacao" element={<Movimentacao/>}/>
            <Route path="/simulacao" element={<Simulacao/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp