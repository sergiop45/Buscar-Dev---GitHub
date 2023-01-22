import React from 'react';
import './card.css';
import CardHeader from './Header';
import Counters from './Counters';
import FooterCard from './Footer';

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

            <Counters />

            <FooterCard />

        </main>
        
    </div>
  )
}

export default Card;