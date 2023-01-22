import React from 'react';

const Item = ({ children, title, link}) => {
  
    if(link) {
        
        return (
            
            <a href={link} target='_blank' 
            className='footer-item'
            rel='noreferrer'
            >
                {children}
                <span>{title}</span>
            </a>

          );

    } else {

        return (
            <div className='footer-item'>
                {children}
                <span>{title}</span>
            </div>
        );

    }
    
}

export default Item;