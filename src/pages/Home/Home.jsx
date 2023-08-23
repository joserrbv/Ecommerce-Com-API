import React, { useEffect, useState } from 'react';
import '../Home/index.scss';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import propaganda from '/propaganda.svg'


//api

export const Home = () => {

  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null)

  useEffect(()=>{
  

    (async()=>{

      try {
        const resApiProdutos = await fetch('https://fakestoreapi.com/products');
        const apiProdutos = await resApiProdutos.json();

        if (!resApiProdutos.ok) {
          throw resApiProdutos
        }

        setProdutos(apiProdutos);
      } catch (error) {
        
        setError({
          titulo: "Erro",
          msg: "Ocorreceu um erro inesperado, tente novamente mais tarde!"
        })

        console.error("Erro no Fetch: ", error)

      }

      
    })()
    

}, [])

  return (
    <div className='home'>
      <Nav />
      {
        (error !== null) ? (<>
          <center class="tela-erro">
            <h1>{error.titulo}</h1>
            <p>{error.msg}</p>
            
            <button onClick={()=>{ window.location.reload() }}>Tentar novamente!</button>
          </center>
        </>) : (<>
          <img className='home__propaganda' src={propaganda} alt="" />
          <div className='home__conteiner'>
            {
              produtos.map(produto => (<ProdutoCard key={produto.id} produto={produto} />))
            }
          </div>
        </>)
      }
      <Footer />
    </div>
  )
}

export default Home