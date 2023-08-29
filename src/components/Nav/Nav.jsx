import React, { useEffect, useState } from 'react'
import './index.css';
import logo from "../../assets/e-commerce-logo.png";
import lupa from "../../assets/lupa.svg"
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [categorias, setCategorias] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {

    (async () => {

      try {
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



  function submitPesquisa(event) {
    event.preventDefault();
    // INICIO - obter valores do formulario
    let dadosFormJson = {};
    let dadosForm = new FormData(event.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });
    // FIM - obter valores do formulario

    console.log(dadosFormJson);
  }



  return (
    <div className='nav'>
      <div className="nav-top">

        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <form onSubmit={() => { submitPesquisa }} className='input-pesquisa'>
          <input id='pesquisa' name="pesquisa" type="text" placeholder="O que você está procurando?" />
          <button type="submit"><i className="font-white fa-solid fa-magnifying-glass fa-2x"></i></button>
        </form>

        <i className="font-white fa-solid fa-cart-shopping fa-2x"></i>
      </div>


      <ul className='nav-bottom'>

        {

          (error !== null) ? (<>

            <center>
              <p><b>{error.titulo}:</b> {error.msg}</p>
            </center>

          </>) : (<>



            {
              categorias.map((categoria) => (<>
                <Link to={`/categoria/${categoria}`}>
                  <li>{categoria}</li>
                </Link>
              </>))
            }

          </>)

        }


      </ul>
    </div>
  )
}

export default Nav