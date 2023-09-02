import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HtmlPageProduto from './Produto.jsx';


export default function PagesProduto() {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    (async () => {

      try {
        const resApiProduto = await fetch(`https://fakestoreapi.com/products/${produtoId}`);
        const apiProduto = await resApiProduto.json();

        if (!resApiProduto.ok) {
          throw resApiProduto
        }

        setProduto(apiProduto);
      } catch (error) {

        setError({
          titulo: "Erro",
          msg: "Ocorreceu um erro inesperado, tente novamente mais tarde!"
        })

        console.error("Erro no Fetch: ", error)

      }

    })()

  }, [])

  return HtmlPageProduto({produto, error})
}