import React from 'react';
import {Link} from 'react-router-dom';
import '../ProdutoCard/index.scss';

export const ProdutoCard = ({produto}) => {
  return (
    <div className='card'>
      <img src={produto.image} alt="model" className='img-produto'/>
      <div className='card__produto'>
        <p>{produto.title}</p>
        <button id='botaoCard'>
          <Link to={`/produto/${produto.id}`}>Ver Mais</Link>
        </button>
      </div>
    </div>
  )
}

export default ProdutoCard