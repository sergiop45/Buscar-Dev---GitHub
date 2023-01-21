import './header.css';
import { useState } from 'react';
import months from './months.jsx';

const CardHeader = () => {

    const [ date, setDate ] = useState(new Date())

    return (
        <header className='card-header'>

            <a 
            target='_blank'
            rel='noreferrer'
            href="#"
            className='username'
            >
                <h3>Joao pedro</h3>
                <h2>@joapd</h2>

            </a>

            <span>
                {
                `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
                }
            </span>

        </header>
    )
}

export default CardHeader;