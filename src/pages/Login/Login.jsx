import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import ComponentsCarregando from '../../components/Carregando/Carregando'
import ComponentsError from '../../components/Error/Error'
import { Link } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function HtmlPageLogin({ carregando, error }) {
  return (
    <div>
      <Nav />


      {
        (carregando === true) ? (<ComponentsCarregando />) : (<>
          {
            (error !== null) ? (<ComponentsError error={error} />) : (<>

              <div className='container tela-login'>

                <div className="btn-login-google">
                  <GoogleOAuthProvider clientId="361414289236-dnaekr591e378au6iife7a81605j0i67.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                      size="large"
                    />
                  </GoogleOAuthProvider>
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
