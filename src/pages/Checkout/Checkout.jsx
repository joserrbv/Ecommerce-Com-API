import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ComponentsCarregando from '../../components/Carregando/Carregando'
import ComponentsError from '../../components/Error/Error'
import { Link } from 'react-router-dom'

export default function HtmlPageCheckout({ carregando, error, carrinho, usuario }) {
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
                    (usuario.id) ? (<></>) : (<>
                      <div>
                        <h2>Você já tem conta?</h2>
                        <p>Se você já tem cadastro em nosso site faça o login antes de fechar a compra para ter suas informações pre-prenchidas!</p>
                        <Link to="/login?redirect=/checkout">
                          <a className='btn'> Efetuar login </a>
                        </Link>
                      </div>

                      <div>
                        <br />
                        <p><b>OU</b></p>
                        <p>Prencha o formulário para cadastrar-se e finalizar sua compra!</p>
                        <br />
                      </div>
                    </>)
                  }
                  <form action="" className="form">

                    <div>
                      <br />
                      <h3>Dados Pessoais</h3>
                      <hr />

                      <label htmlFor="nomeCompleto">Nome completo</label>
                      <input defaultValue={usuario?.nomeCompleto} type="text" id="nomeCompleto" name="nomeCompleto" className="input" required />


                      <label htmlFor="cpf">CPF</label>
                      <input type="text" id="cpf" name="cpf" className="input" required />


                      <label htmlFor="celular">Celular</label>
                      <input type="text" id="celular" name="celular" className="input" required />


                      <label htmlFor="email">E-mail</label>
                      <input defaultValue={usuario?.email} type="text" id="email" name="email" className="input" required />
                    </div>

                    <div>
                      <br />
                      <h3>Pagamento</h3>
                      <hr />

                      <label htmlFor="numeroCartao">Número do cartão de cŕedito</label>
                      <input type="text" id="numeroCartao" name="numeroCartao" className="input" required />


                      <label htmlFor="dataValidade">Data de validade</label>
                      <input type="text" id="dataValidade" name="dataValidade" className="input" required />


                      <label htmlFor="cvv">CVV - Código de segurança</label>
                      <input type="text" id="cvv" name="cvv" className="input" required />
                    </div>



                    <Link to="/">
                      <a className='btn btn-medium'>
                        <i className="font-white fa-solid fa-cart-shopping"></i> Comprar!
                      </a>
                    </Link>

                  </form>

                </div>

                <div className='dual-col col-align-right'>
                  {
                    carrinho?.itens?.map((produto, indexProduto) => (<>
                      <h4>{produto?.title}</h4>
                      <h6>R$ {produto?.price}</h6>
                      <br />
                    </>))
                  }

                  <h1><b>Valor Total:</b> {Number(carrinho?.valorTotal).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</h1>
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