import React from 'react';
import './card.css';
import CardHeader from './Header';

const Card = () => {
  return (
    <div className='card-container dark'>
        
        <img 
        alt='Imagem Usuario'
        className='image'
        />

        <main className='card-body'>

            <CardHeader />

            <p className='bio'>bio</p>

            <div>counters</div>

            <footer>footer</footer>

        </main>
        
    </div>
  )
}

export default Card;