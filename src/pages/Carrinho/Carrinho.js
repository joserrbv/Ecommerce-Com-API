import React, { useEffect, useState } from 'react'
import HtmlPageCarrinho from './Carrinho.jsx';
import { useNavigate } from 'react-router-dom';


export default function PagesCarrinho() {
  const [carrinho, setCarrinho] = useState(null)
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  

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

  function onClickRemoverProduto(produto, indexProduto){
    let certeza = window.confirm("Você tem certeza que quer remover esse produto?");
    if(certeza === true){
      setCarregando(true);
      let carrinho = {itens: [], valorTotal: 0};
      try {
        carrinho = JSON?.parse(localStorage.getItem("carrinho") || "{ itens: [], valorTotal: 0 }");
      } catch (error) {}
  
      carrinho.valorTotal -= produto.price;
      carrinho?.itens?.splice(indexProduto, 1);

    
  
      localStorage.setItem("carrinho", JSON?.stringify(carrinho));
      setCarrinho(carrinho);
      setCarregando(false);
    }
  }

  
  

return HtmlPageCarrinho({ carrinho, carregando, error, onClickRemoverProduto })
}