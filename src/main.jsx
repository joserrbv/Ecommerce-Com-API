import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Carrinho from './pages/Carrinho/Carrinho';
import Login from './pages/Login/Login';
import Pay from './pages/Pay/Pay';
import Home from './pages/Home/Home';
import PagesProduto from './pages/Produto/Produto.js';
import Cadastro from './pages/Cadastro/Cadastro';
import './index.css';
import PagesCategoria from './pages/Categoria/Categoria';
import Pesquisa from './pages/Pesquisa/Pesquisa';


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
