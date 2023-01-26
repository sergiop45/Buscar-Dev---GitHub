import React, { useState } from 'react';
import './search.css';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../../contexts/themeContext';
import { useUser } from '../../contexts/userContext';

const Search = () => {

    const [ user, setUser ] = useState('');
    const { theme } = useTheme();
    const { searchUser } = useUser();

  function handleSubmit(e) {
    
    e.preventDefault();
    searchUser(user);
    setUser('');

  }

  return (
    <form className={theme} onSubmit={handleSubmit}>

        <FaSearch size={28} color='var(--blue)'/>
        <input
        placeholder='Buscar no GitHub'
        type='text'
        value={user}
        onChange={e => setUser(e.target.value)}
        />
        <button >Buscar</button>

    </form>
  )
}

export default Search;