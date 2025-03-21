import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import PagesCarrinho from './pages/Carrinho/Carrinho';
import PagesLogin from './pages/Login/Login';
import Home from './pages/Home/Home';
import PagesProduto from './pages/Produto/Produto.js';
import Cadastro from './pages/Cadastro/Cadastro';
import PagesCategoria from './pages/Categoria/Categoria';
import Pesquisa from './pages/Pesquisa/Pesquisa';
import './index.css';
import PagesCheckout from './pages/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <PagesLogin />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/loja",
    element: <Home />,
  },
  {
    path: "/pesquisa",
    element: <Pesquisa />,
  },
  {
    path: "/categoria/:nome",
    element: <PagesCategoria/>,
  },
  {
    path: "/produto/:produtoId",
    element: <PagesProduto />,
  },
  {
    path: "/carrinho",
    element: <PagesCarrinho />,
  },
  {
    path: "/checkout",
    element: <PagesCheckout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
