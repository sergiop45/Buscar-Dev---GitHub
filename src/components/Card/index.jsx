import React from "react";

import './card.css';
import CardHeader from './Header';
import Counters from './Counters';
import FooterCard from './Footer';
import Image from "./Avatar";

const Card = () => {
  return (
    <div className='card-container dark'>
        
        <Image/>

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