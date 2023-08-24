import React from 'react'
import './index.css';
import logo from "../../assets/e-commerce-logo.png";
import lupa from "../../assets/lupa.svg"

export const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-top">
          <img src={logo} alt="logo" className="logo" />

          <div className='input-pesquisa'>
            <i className="font-white fa-solid fa-magnifying-glass fa-rotate-90 fa-2x"></i>
            <input id='pesquisa' type="text" placeholder="O que você está procurando?" />
          </div>

          <i className="font-white fa-solid fa-cart-shopping fa-2x"></i>
        </div>
        
        <ul className='nav-bottom'>
          <li>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesas Gamer</li>
          <li>Promoções</li>
          <li>Atendimento</li>
        </ul>
    </div>
  )
}

export default Nav