import React, { useState } from 'react';
import './search.css';
import { FaSearch } from 'react-icons/fa';

const Search = () => {

    const [ user, setUser ] = useState('');

  return (
    <form className='dark'>

        <FaSearch size={28} color='var(--blue)'/>
        <input
        placeholder='Buscar no GitHub'
        type='text'
        value={user}
        onChange={e => setUser(e.target.value)}
        />
        <button>Buscar</button>

    </form>
  )
}

export default Search;