import React, { useEffect, useState } from 'react'
import HtmlPageLogin from './Login.jsx';
import { useNavigate } from 'react-router-dom';


export default function PagesLogin() {
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);

  useEffect(() => {

    (async () => {

      try {
        setCarregando(true);

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

  }, [])



  function loginSucesso(credentialResponse){
    localStorage.setItem("credencialUsuario", JSON.stringify(credentialResponse));
    if(queryParams.get('redirect')){
      navigate(queryParams.get('redirect'));
    } else { 
      navigate("/");
    }
  }

  
  


return HtmlPageLogin({ carregando, error, loginSucesso })
}