import React from 'react';
import './counters.css';

const Counters = () => {
  return (
    <div className='counters dark'>
        
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