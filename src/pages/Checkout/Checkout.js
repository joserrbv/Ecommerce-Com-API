import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HtmlPageCheckout from './Checkout.jsx';
import { useNavigate } from 'react-router-dom';
import obterUsuario from '../../functions/obterUsuario.js';


export default function PagesCheckout() {
  const [carrinho, setCarrinho] = useState(null)
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {

    (async () => {

      try {
        setCarregando(true);
        let carrinho = {itens: [], valorTotal: 0};
        try {
          carrinho = JSON?.parse(localStorage.getItem("carrinho") || "{ itens: [], valorTotal: 0 }");
        } catch (error) {}
        
        setUsuario(obterUsuario());
        setCarrinho(carrinho);
        setCarregando(false);
      } catch (error) {

        setError({
          titulo: "Erro",
          msg: "Ocorreceu um erro inesperado, tente novamente mais tarde!"
        })
        setCarregando(false);

        console.error("Erro no Fetch: ", error)

      }

    })()

  }, [])

  
  


return HtmlPageCheckout({ carregando, error, carrinho, usuario })
}