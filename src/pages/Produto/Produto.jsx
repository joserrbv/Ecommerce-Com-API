import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ComponentsCarregando from '../../components/Carregando/Carregando'
import ComponentsError from '../../components/Error/Error'

export default function HtmlPageProduto({ produto, carregando, error, onClickAddCart }) {
  return (
    <div>
      <Nav />


      {
        (carregando === true) ? (<ComponentsCarregando />) : (<>
          {
            (error !== null) ? (<ComponentsError error={error} />) : (<>

              (produto !== null) && (<>
                <div className='container bg-white'>

                  <div className='dual-col'>
                    <img className='img-produto-detalhe' src={produto?.image} alt={`Imagem do produto ${produto?.title}`} />
                  </div>

                  <div className='dual-col'>
                    <h1>{produto?.title}</h1>
                    <h2>R$ {produto?.price}</h2>
                    <hr />
                    <p>{produto?.description}</p>

                    <button className='btn btn-medium' type="button" onClick={() => { onClickAddCart(produto) }} >
                      <i className="font-white fa-solid fa-cart-shopping"></i> Adicionar ao Carrinho
                    </button>
                  </div>

                </div>
              </>)
            </>)
          }
        </>)
      }

      <Footer />

    </div>
  )
}