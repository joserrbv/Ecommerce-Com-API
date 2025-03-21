import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ComponentsCarregando from '../../components/Carregando/Carregando'
import ComponentsError from '../../components/Error/Error'
import { Link } from 'react-router-dom'

export default function HtmlPageCarrinho({ carrinho, carregando, error, onClickRemoverProduto }) {
  return (
    <div>
      <Nav />


      {
        (carregando === true) ? (<ComponentsCarregando />) : (<>
          {
            (error !== null) ? (<ComponentsError error={error} />) : (<>

              <div className='container bg-white'>

                <div className='dual-col'>

                  {
                    carrinho?.itens?.map((produto, indexProduto) => (<>
                      <div className='d-flex'>
                        <div className='dual-col'>
                          <h3>{produto?.title}</h3>
                          <h4>R$ {produto?.price}</h4>
                          <br />
                        </div>

                        <div className='dual-col col-align-right'>
                          <button className='btn bg-danger' type="button" onClick={() => { onClickRemoverProduto(produto, indexProduto) }} >
                            <i className="font-white fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </>))
                  }

                </div>

                <div className='dual-col col-align-right'>
                  <h2><b>Valor Total:</b> {Number(carrinho?.valorTotal).toLocaleString('pt-br', { style: "currency", currency: "BRL" } )} </h2>

                  <Link to="/checkout">
                    <a className='btn btn-medium'>
                      <i className="font-white fa-solid fa-cart-shopping"></i> Finalizar Compra
                    </a>
                  </Link>
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