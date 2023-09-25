import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HtmlPageProduto from './Produto.jsx';
import { useNavigate } from 'react-router-dom';


export default function PagesProduto() {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null)
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

    (async () => {

      try {
        setCarregando(true);
        const resApiProduto = await fetch(`https://fakestoreapi.com/products/${produtoId}`);
        const apiProduto = await resApiProduto.json();

        if (!resApiProduto.ok) {
          throw resApiProduto
        }

        setProduto(apiProduto);
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

  function onClickAddCart(produto){
    setCarregando(true);
    let carrinho = { itens: [], valorTotal: 0 };
    try {
      carrinho = JSON?.parse(localStorage.getItem("carrinho") || "{ itens: [], valorTotal: 0 }");
    } catch (error) {}
    
    carrinho?.itens?.push(produto);
    carrinho.valorTotal += produto.price;

    localStorage.setItem("carrinho", JSON?.stringify(carrinho));

    setCarregando(false);
    navigate("/carrinho");
  }

  return HtmlPageProduto({produto, carregando, error, onClickAddCart})
}