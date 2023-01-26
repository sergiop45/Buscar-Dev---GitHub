import React from 'react';
import './footer.css';
import Item from './item';
import { FaMapMarkerAlt, FaLink,
         FaTwitter, FaBuilding } from 'react-icons/fa';

export default function FooterCard ({ blog, twitter, local, company }) {
    return (
        <footer className='footer-card'>

            <section>
                
                <Item title={local}> 
                    <FaMapMarkerAlt
                     size={18} 
                     color='inherit'
                      />
                </Item>

                <Item title={blog} link='#'> 
                    <FaLink
                     size={18} 
                     color='inherit'
                      />
                </Item>

            </section>

            <section>
                
                <Item title={twitter} link={`https://twitter.com/${twitter}`}> 
                    <FaTwitter
                     size={18} 
                     color='inherit'
                      />
                </Item>

                <Item title={company} > 
                    <FaBuilding
                     size={18} 
                     color='inherit'
                      />
                </Item>
                
            </section>

        </footer>
    );
}