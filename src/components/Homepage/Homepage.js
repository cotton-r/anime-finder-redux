import React from 'react';

import AnimeList from '../AnimeList/AnimeList';

const Homepage = () => {
  return (
    <div>
        <div className='header'>
            <h1 className='title'>
                Anime Finder
            </h1>
            {/* <SearchBar /> */}
        </div>
        <div className='main'>
            <AnimeList />
        </div>
    </div>
  )
}

export default Homepage;