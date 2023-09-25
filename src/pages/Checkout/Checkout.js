import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HtmlPageCheckout from './Checkout.jsx';
import { useNavigate } from 'react-router-dom';


export default function PagesCheckout() {
  const [carrinho, setCarrinho] = useState(null)
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    (async () => {

      try {
        setCarregando(true);
        let carrinho = {itens: [], valorTotal: 0};
        try {
          carrinho = JSON?.parse(localStorage.getItem("carrinho") || "{ itens: [], valorTotal: 0 }");
        } catch (error) {}

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

  
  


return HtmlPageCheckout({ carrinho, carregando, error })
}