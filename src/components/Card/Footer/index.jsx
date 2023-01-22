import React from 'react';
import './footer.css';
import Item from './item';
import { FaMapMarkerAlt, FaLink,
         FaTwitter, FaBuilding } from 'react-icons/fa';

export default function FooterCard () {
    return (
        <footer className='footer-card'>

            <section>
                
                <Item title='Recife'> 
                    <FaMapMarkerAlt
                     size={18} 
                     color='inherit'
                      />
                </Item>

                <Item title='Youtube' link='#'> 
                    <FaLink
                     size={18} 
                     color='inherit'
                      />
                </Item>

            </section>

            <section>
                
                <Item title='Twitter' link='#'> 
                    <FaTwitter
                     size={18} 
                     color='inherit'
                      />
                </Item>

                <Item title='Kenlo' link='#'> 
                    <FaBuilding
                     size={18} 
                     color='inherit'
                      />
                </Item>
                
            </section>

        </footer>
    );
}