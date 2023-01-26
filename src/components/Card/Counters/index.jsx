import React from 'react';
import './counters.css';
import { useTheme } from '../../../contexts/themeContext';

const Counters = ({ followers, repos, following }) => {

  const { theme } = useTheme();

  return (
    <div className={`counters ${theme}`}>
        
        <div className='counters-item'>
            <span>Repositorios</span>
            <h3>{ repos }</h3>
        </div>

        <div className='counters-item'>
            <span>Fowllowers</span>
            <h3> { followers } </h3>
        </div>

        <div className='counters-item'>
            <span>Following</span>
            <h3>{ following }</h3>
        </div>
        
    </div>
  );
}

export default Counters;