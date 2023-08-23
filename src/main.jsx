import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.scss';
import  Carrinho  from './pages/Carrinho/Carrinho';
import  Login  from './pages/Login/Login';
import  Pay from './pages/Pay/Pay';
import  Home  from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import Cadastro from './pages/Cadastro/Cadastro';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
   {
     path: "/loja",
     element: <Home />,
   },
  {
    path: "/produto/:produtoId",
    element: <Produto />,
  },
  {
    path: "/carrinho/:carrinhoId",
    element: <Carrinho />,
  },
  {
    path: "/pay/:payId",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
