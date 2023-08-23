import { Link } from "react-router-dom";
import React from "react";
import "./index.scss";
import carrinhoDir from "../../assets/carrinhoDir.svg";
import { useForm } from "react-hook-form";

const DetalhedoProduto = ({ produto }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (produto) => console.log(produto);

  function clickbtnAddCar() {

    //logo será feita uma verificação de o usuário está logado

    modal.style.display = "block";

  }

  console.log(watch("produto")); // watch input value by passing the name of it
  //   console.log(produto);
  return (
    <div className="Detalhedoproduto">
      <div className="Detalhedoproduto_esquerdo">
        <div className="Detalhedoproduto__card">
          <img src={produto?.image} alt="" className="img-produto-detalhes" />
          <p>{produto?.title}</p>
        </div>
        <div
          className="Detalhedoproduto__descricao, border-bottom"
          style={{ paddingBottom: "10px" }}
        >
          <h2>Descrição</h2>

          <label>{produto?.description}</label>
        </div>
      </div>
      <div className="Detalhedoproduto_direito">
        <div className="Detalhedoproduto_direito_nome">
          <h2 className="border-bottom">{produto?.title}</h2>
        </div>
        <div className="preco">
          <p>{produto?.price}</p>
        </div>
        {/* <div className="Detalhedoproduto_direito_cor">
          Cor:{" "}
          {produto?.cor?.length === 1
            ? produto?.cor?.map((cor, index) => <span key={index}>{cor}</span>)
            : produto?.cor?.map((cor, index) =>
                index + 1 === produto?.cor?.length ? (
                  <span key={index}>{cor}</span>
                ) : (
                  <span key={index}>{cor}, </span>
                )
              )}
        </div> */}
        {/* <div className="Detalhedoproduto__cubocor">
          {produto?.cor?.map((cor) => (
            <div
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "10px",
                backgroundColor: cor,
                border: "none ",
              }}
            >
              {" "}
            </div>
          ))}
        </div> */}

        <button
          id="Detalhedoproduto_direito_button"
          type="button"
          onClick={() => {clickbtnAddCar();}}
        >
          <img id="carrinho" src={carrinhoDir} alt="" srcset="" />
          Adicionar ao Carrinho
        </button>
      </div>
      {/* modal 1 */}

      <div id="modal">
        <div id="modal_content">
          <div className="left">
            <img src={produto?.image} className="img-produto-detalhes" style={{ marginTop: "10%" }} />
          </div>
          <div className="right">
            <h2 className="right_titulo"> Meu Carrinho </h2>

            <h1 id="border-bottom">{produto?.title}</h1>
            <p
              style={{
                fontSize: "32px",
                marginBottom: "27px",
                fontWeight: "900",
                marginTop: "27px",
                fontFamily: "Inter",
              }}
            >
              {produto?.preco}
            </p>

            {/* <h5>cor: {produto?.cor} </h5> */}
{/* 
            <div className="Detalhedoproduto__cubocor">
              {produto?.cor?.map((cor) => (
                <div
                  style={{
                    width: "40px",
                    height: "35px",
                    borderRadius: "10px",
                    backgroundColor: cor,
                    border: "none ",
                  }}
                >
                  {" "}
                </div>
              ))}
            </div> */}
            <div className="botoes">
              <button className="botoes_one">
                <Link to={`/`}> Continuar Comprando</Link>
              </button>

              <button
                className="botoes_two"
                onClick={() => {
                  console.log("click");
                  {
                    {
                      modalPay.style.display = "flex";
                    }
                  }
                }}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*     termina 1     */}

      {/* inicia modal 2 */}

      <div className="modalPay" id="modalPay">
        <div className="modalPay__content">
          <form onSubmit={handleSubmit(onSubmit)} className="modalPay__form">
            <h1 id="finalizarCompar">Finalizar compra:</h1>
            <label className="modalPay__label">Digite seu nome:</label>
            <input
              placeholder="Digite seu nome"
              {...register("firstName", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              className="modalPay__input"
            />

            <label className="modalPay__label">Digite seu CPF:</label>
            <input
              placeholder="Digite seu CPF"
              type="text"
              {...register("CPF", {
                required: true,
                pattern: /^(\d{3}\.){2}\d{3}\-\d{2}$/,
              })}
              className="modalPay__input"
            />

            <label className="modalPay__label">Endereço:</label>
            <input
              placeholder="**********************"
              {...register("address", {
                required: true,
                minLength: 10,
                maxLength: 50,
              })}
              className="modalPay__input"
            />

            <label className="modalPay__label">Forma de Pagamento:</label>
            <input
              placeholder="**********************"
              {...register("payment", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              className="modalPay__input"
            />

            {errors.exampleRequired && <span>Campo Obrigatório</span>}

            <button className="botoes_one">Confirmar Compra</button>
          </form>
        </div>
      </div> 






    </div>
  );
};

export default DetalhedoProduto;
