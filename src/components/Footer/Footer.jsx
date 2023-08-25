import React from 'react'
import './index.scss';
import logo from '../../assets/e-commerce-logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <img className="logo" src={logo} alt="Logo da empresa" />
        <p>
        Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <br />
        <b>Para mais informações</b>, entre em contato: (011) 1111-2222
        </p>
    </div>
  )
}

export default Footer
