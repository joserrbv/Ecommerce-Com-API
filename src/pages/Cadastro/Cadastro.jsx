import React from 'react'
import '../Cadastro/index.scss'
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
  const navigate = useNavigate();

  async function submitFormCadastro(event) {
    event.preventDefault();
    // INICIO - obter valores do formulario
    let dadosFormJson = {};
    let dadosForm = new FormData(event.target);
    dadosForm.forEach((valor, chave) => {
      dadosFormJson[chave] = valor;
    });
    // FIM - obter valores do formulario


    if(dadosFormJson.password !== dadosFormJson.passwordCheck) {
      alert("Erro, as senhas digitadas não confere!");
      return;
    }



    const apiBody = {
      ...dadosFormJson,
      name: {
        firstname: dadosFormJson?.firstname,
        lastname: dadosFormJson?.lastname
      }
    }
    const resApiUser = await fetch('https://fakestoreapi.com/users', { method: "POST", body: JSON.stringify(apiBody) });
    const apiUser = await resApiUser.json()

    if(resApiUser.ok){
      console.log(apiUser)
      navigate("/login")
    }else{
      alert("Erro, Não conseguimos cadastrar o usuario, nome do usuario ja existe, tente novamente mais tarde!")
    }
  }


  return (
    <div className='cadastro'>
      <h1>Faça seu cadastro</h1>

      <form onSubmit={submitFormCadastro}>

        <div className="cadastro_one">
          <label htmlFor="firstname">Nome</label> <br />
          <input type="text" id='firstname' name='firstname' required />
        </div>

        <div className="cadastro_one">
          <label htmlFor="lastname">Sobrenome</label> <br />
          <input type="text" id="lastname" name='lastname' required />
        </div>

        <div className="cadastro_one">
          <label htmlFor="email">E-mail</label> <br />
          <input type="email" id='email' name='email' required />
        </div>

        <div className="cadastro_one">
          <label htmlFor="phone">Telefone</label> <br />
          <p>Ex: (99) 9999-9999</p>
          <input type="text" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" placeholder="(99) 9999-9999" title="Número de telefone precisa ser no formato (99) 9999-9999" id='phone' name='phone' required />
        </div>

        <div className="cadastro_one">
          <label htmlFor="username">Usuário</label> <br />
          <input type="text" id='username' name='username' required/>
        </div>

        <div className="cadastro_one">
          <label htmlFor="password">Senha</label> <br />
          <input type="password" id='password' name='password' required/>
        </div>

        <div className="cadastro_one">
          <label htmlFor="passwordCheck">Digite novamente sua senha</label> <br />
          <input type="password" id='passwordCheck' name='passwordCheck' required/>
        </div>


        <button type="submit"> Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro