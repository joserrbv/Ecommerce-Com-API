import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HtmlPageLogin from './Login.jsx';
import { useNavigate } from 'react-router-dom';


export default function PagesLogin() {
  const [error, setError] = useState(null)
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

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

  
  


return HtmlPageLogin({ carregando, error })
}