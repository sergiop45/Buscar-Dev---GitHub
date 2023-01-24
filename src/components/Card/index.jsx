import React from 'react';
import './card.css';
import CardHeader from './Header';
import Counters from './Counters';
import FooterCard from './Footer';
import { useTheme } from '../../contexts/themeContext';

const Card = () => {

  const { theme } = useTheme();

  return (
    <div className={`card-container ${theme}`}>
        
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