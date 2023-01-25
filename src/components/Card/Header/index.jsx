import './header.css';
import { useState } from 'react';
import months from './months.jsx';
import { useEffect } from 'react';

const CardHeader = ({ name, username, link, createdAt }) => {

    const [ date, setDate ] = useState(new Date())

    useEffect(() =>  setDate(new Date(createdAt)) ,[createdAt])

    return (
        <header className='card-header'>

            <a 
            target='_blank'
            rel='noreferrer'
            href={link}
            className='username'
            >
                <h3> { name } </h3>
                <h2>@{ username }</h2>

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