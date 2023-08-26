import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

export default function HtmlPageProduto({ produto, error }) {
  return (
    <div>
      <Nav />

      {
        (error !== null) ? (<>
          <center class="tela-erro">
            <h1>{error.titulo}</h1>
            <p>{error.msg}</p>

            <button onClick={() => { window.location.reload() }}>Tente novamente</button>
          </center>
        </>) : (<>
          {
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

                  <button className='btn btn-medium' type="button" > 
                    <i className="font-white fa-solid fa-cart-shopping"></i> Adicionar ao Carrinho
                  </button>
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