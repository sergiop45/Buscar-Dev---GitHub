import React from "react";

import './card.css';
import CardHeader from './Header';
import Counters from './Counters';
import FooterCard from './Footer';
import Image from "./Avatar";
import { useTheme } from '../../contexts/themeContext';
import { useUser } from '../../contexts/userContext';


const Card = () => {

  const { theme } = useTheme();
  const { avatar, bio, blog, company,
          createdAt, followers, following,
          linkProfile, name, local,
          repos, twitter, username } = useUser();

  return (
    <div className={`card-container ${theme}`}>
        

        <Image/>
        <img 
        alt='Imagem Usuario'
        className='image'
        src={avatar}
        />


        <main className='card-body'>

            <CardHeader name={name} username={username} link={linkProfile} createdAt={createdAt}/>

            <p className='bio'>{bio}</p>

            <Counters followers={followers} following={following} repos={repos} />

            <FooterCard twitter={twitter} local={local} blog={blog} company={company} />

        </main>
        
    </div>
  )
}

export default Card;