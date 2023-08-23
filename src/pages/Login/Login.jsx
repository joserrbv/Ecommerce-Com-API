import React, { useState } from 'react';
import logo from "../../assets/DncDetalhe.svg";
import { Link } from 'react-router-dom';

import './index.scss';


const Login = () => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [usuarioError, setUsuarioError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let usuarioValidSubmit = true;
    let passwordValidSubmit = true;


    if (usuario.trim() === '') {
      setUsuarioError('Por favor, insira seu USUARIO.');
      usuarioValidSubmit = false;
    } else {
      setUsuarioError('');
    }

    if (password.trim() === '') {
      setPasswordError('Por favor, insira sua senha.');
      passwordValidSubmit = false;
    } else {
      setPasswordError('');
    }

    if (usuarioValidSubmit && !usuarioError) {
      setUsuarioError('');
    }

    if (usuarioValidSubmit && passwordValidSubmit) {
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(true);
        console.log('Login realizado com sucesso!');
        setIsSubmitted(true);
      }, 2000);
    } else {
      setIsSubmitted(true);
    }
  };
  return (
    <div>
      <section className="login no-scroll">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 id='titulo_login'>Acesse com seu login ou cadastre-se!</h1>
          <h2>Você pode entrar com o seu Usuário</h2>
          <div className="login__input-wrapper">
            <label htmlFor="usuario">Digite seu Usuário</label>
            <input
              type="text"              
              id="usuario"
              className="login__input-name"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            {usuarioError && <p className="login__error">{usuarioError}</p>}
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="login__error">{passwordError}</p>}
          </div>
          {isSubmitted && isConfirmed ? (
            <Link to={`/Home/`}>
              <button id='buttonEntrar'>Entrar</button>
            </Link>
          ) : (
            <button id='buttonEntrar' type="submit">Entrar</button>
          )}
        </form>
        <div className="CreateAcount">
        <p>Ainda não tem cadastro?</p> <Link to={`/Cadastro/`}>Criar Conta </Link>
        </div>
      </section>
    </div>
  );
};
export default Login;

