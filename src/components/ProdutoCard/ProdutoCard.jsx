import React from 'react';
import {Link} from 'react-router-dom';
import '../ProdutoCard/index.scss';

export const ProdutoCard = ({produto}) => {
  return (
    <div className='card'>
      <img className='img-produto' src={produto.image} alt={`Foto do produto ${produto.title}`} />

      <p>{produto.title}</p>

      <Link className="btn" to={`/produto/${produto.id}`}>Ver Mais</Link>
    </div>
  )
}

export default ProdutoCard