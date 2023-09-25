import React, { useEffect, useState } from 'react'
import './index.css';
import logo from "../../assets/e-commerce-logo.png";
import { Link } from 'react-router-dom';

export const Nav = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null)
  const [carrinho, setCarrinho] = useState(null)

  useEffect(() => {


    (async () => {

      try {
        let carrinho = {itens: [], valorTotal: 0};
        try {
          carrinho = JSON?.parse(localStorage.getItem("carrinho") || "{ itens: [], valorTotal: 0 }");
        } catch (error) {}

        setCarrinho(carrinho);


        const resApi = await fetch('https://fakestoreapi.com/products/categories')
        const resApiJson = await resApi.json()

        if (resApi.ok) {
          setCategorias(resApiJson)
        } else {
          throw resApi
        }
      } catch (error) {

        setError({
          titulo: 'Erro',
          msg: 'Ocorreceu um erro inesperado, tente novamente mais tarde!'
        })

        console.error('erro no fetch', error);
      }






    })()

  }, [])



  return (
    <div className='nav'>
      <div className="nav-top">

        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <form action="/pesquisa" className='input-pesquisa'>
          <input id='busca' name="busca" type="text" placeholder="O que você está procurando?" minLength="2" defaultValue={queryParams.get('busca')} required />
          <button type="submit"><i className="font-white fa-solid fa-magnifying-glass fa-2x"></i></button>
        </form>

        <Link to={`/carrinho`}><i className="font-white fa-solid fa-cart-shopping fa-2x"></i> <span className='text-white'>{carrinho?.itens?.length}</span></Link>
      </div>


      <ul className='nav-bottom'>

        {

          (error !== null) ? (<>

            <center>
              <p><b>{error.titulo}:</b> {error.msg}</p>
            </center>

          </>) : (<>



            {
              categorias.map((categoria) => (<div key={categoria}>
                <Link to={`/categoria/${categoria}`}>
                  <li>{categoria}</li>
                </Link>
              </div>))
            }

          </>)

        }


      </ul>
    </div>
  )
}

export default Nav