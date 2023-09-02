import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import ComponentsCarregando from '../../components/Carregando/Carregando';
import ComponentsError from '../../components/Error/Error';


export default function PagesCategoria() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {

    (async () => {


      try {
        setCarregando(true);
        const resApiProdutos = await fetch(`https://fakestoreapi.com/products/category/${nome}`);
        const apiProdutos = await resApiProdutos.json();

        if (!resApiProdutos.ok) {
          throw resApiProdutos
        }


        setProdutos(apiProdutos);
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


  }, [nome])

  return (
    <div className='categoria'>
      <Nav />

      {
        (carregando === true) ? (<ComponentsCarregando/>) : (<>
          {
            (error !== null) ? (<ComponentsError error={error} />) : (<>

              <div className='container'>
                <h1 className='text-center'>Categoria: {nome}</h1>

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