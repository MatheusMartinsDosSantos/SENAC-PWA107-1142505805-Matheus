import {Link}  from 'react-router-dom';
import './style.css';
import React from 'react';

function Header(){
    return (
<header>
    <h2>Swiss Bank</h2>
    <div className='menu'>
    <Link to="/">Home</Link> 
    <Link to="/sobre">Sobre</Link> 
    <Link to="/cadastro">Cadastro de Cliente</Link>
    <Link to="/movimentacao">Movimentação da Conta Corrente</Link>
    <Link to="/simulacao">Simulação de financiamento</Link>
    </div>
</header>
    )
}
export default Header;