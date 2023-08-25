import React from 'react'
import './index.css';
import logo from "../../assets/e-commerce-logo.png";
import lupa from "../../assets/lupa.svg"

export const Nav = () => {

  function submitPesquisa(event){
    event.preventDefault();
    // INICIO - obter valores do formulario
    let dadosFormJson = {};
    let dadosForm = new FormData(event.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });
    // FIM - obter valores do formulario

    console.log(dadosFormJson);
  }

  return (
    <div className='nav'>
        <div className="nav-top">
          <img src={logo} alt="logo" className="logo" />

          <form onSubmit={()=>{submitPesquisa}} className='input-pesquisa'>
            <input id='pesquisa' name="pesquisa" type="text" placeholder="O que você está procurando?" />
            <button type="submit"><i className="font-white fa-solid fa-magnifying-glass fa-2x"></i></button> 
          </form>

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