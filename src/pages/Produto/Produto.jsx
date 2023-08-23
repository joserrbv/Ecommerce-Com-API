import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Produto/index.scss'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import DetalhedoProduto from '../../components/DetalhedoProduto/DetalhedoProduto'

const Produto = ({ dados }) => {
   const {produtoId} = useParams() ;
   const [produto, setProduto] = useState(null)
   const [error, setError] = useState(null)
   

  useEffect(()=>{

    (async()=>{

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

  },[])

  return (
    <div>
      <Nav/>

      {
        (error !== null) ? (<>
        <center class="tela-erro">
          <h1>{error.titulo}</h1>
          <p>{error.msg}</p>

          <button onClick={()=>{ window.location.reload()}}>Tente novamente</button>
        </center>
        </>) : (<>
        {
          (produto !== null) && (<>
            <DetalhedoProduto produto={produto}/>
          </>)
        }
        </>)
      }

            
      <Footer/>

    </div>
  )
}

export default Produto