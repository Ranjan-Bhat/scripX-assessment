import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [search, setSearch] = useState('');
  return (
    <nav>
        <Link to="/tv-shows/avengers">Avengers</Link>
        <Link to="/tv-shows/pokemon">Pokemon</Link>
        <Link to="/tv-shows/doraemon">Doraemon</Link>
        <Link to={`/tv-shows/${search}`} >
            <input type="text" placeholder='Search here...' value={search} onChange={e => setSearch(e.target.value)}/>
        </Link>
    </nav>
  )
}
