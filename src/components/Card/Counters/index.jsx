import React from 'react';
import './counters.css';
import { useTheme } from '../../../contexts/themeContext';

const Counters = () => {

  const { theme } = useTheme();

  return (
    <div className={`counters ${theme}`}>
        
        <div className='counters-item'>
            <span>Repositorios</span>
            <h3>59</h3>
        </div>

        <div className='counters-item'>
            <span>Fowllowers</span>
            <h3>12</h3>
        </div>

        <div className='counters-item'>
            <span>Following</span>
            <h3>23</h3>
        </div>
        
    </div>
  );
}

export default Counters;