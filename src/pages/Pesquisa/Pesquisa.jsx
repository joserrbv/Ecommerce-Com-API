import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import ComponentsCarregando from '../../components/Carregando/Carregando';
import ComponentsError from '../../components/Error/Error';


//api

export default function Pesquisa() {
  const queryParams = new URLSearchParams(window.location.search);
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {


    (async () => {

      try {
        setCarregando(true);
        const resApiProdutos = await fetch('https://fakestoreapi.com/products');
        const apiProdutos = await resApiProdutos.json();

        if (!resApiProdutos.ok) {
          throw resApiProdutos
        }


        const produtosFiltrado = apiProdutos.filter((produto) => {
          let titulo = String(produto?.title).toLocaleLowerCase();
          let termoBusca = String(queryParams.get('busca')).toLocaleLowerCase();

          return titulo.includes(termoBusca);
        });


        if (produtosFiltrado.length <= 0) {
          setError({
            titulo: "Não encontramos produto para sua busca!",
            msg: `Infelizmente não encontramos produto para o termo de busca "${queryParams.get('busca')}"!`
          })
        }

        setProdutos(produtosFiltrado);
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

  return (
    <div className='pesquisa'>
      <Nav />


      {
        (carregando === true) ? (<ComponentsCarregando />) : (<>
          {
            (error !== null) ? (<ComponentsError error={error} />) : (<>

              <div className='container'>
                <h1 className='text-center'>Pesquisa: {queryParams.get('busca')}</h1>

                <div className='container gap-2'>
                  {
                    produtos.map(produto => (<ProdutoCard key={produto.id} produto={produto} />))
                  }
                </div>
              </div>


            </>)
          }

        </>)
      }

      <Footer />
    </div>
  )
}

