import React from 'react'
import './index.scss';
import logo from "../../assets/DncDetalhe.svg";
import carrinho from "../../assets/carrinhoEsq.svg"
import lupa from "../../assets/lupa.svg"

export const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav__cart-shop">
          <img id='logodnc' src={logo} alt="logo" className="c" />
          <img id='lupa' src={lupa} alt="search logo" className="nav__search-logo" />
          <input id='pesquisa' type="text" placeholder="O que você está procurando?" />
          <img className='nav__carrinho' src={carrinho} alt="carrinho" />
        </div>
        
        <div className='navegacao'>
          <ul>
            <li id='novidade'>Novidades</li>
            <li>Jogos</li>
            <li>Video Games</li>
            <li>Mesas Gamer</li>
            <li>Promoções</li>
            <li>Atendimento</li>
          </ul>
        </div>
    </div>
  )
}

export default Nav