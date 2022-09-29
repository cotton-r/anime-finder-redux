import React from 'react';

import './AnimeCard.css';

import { Image } from 'antd';

const AnimeCard = ({ anime }) => {
  return (
    <div className='anime-card'>
        <img src={anime.attributes.posterImage.small} />
    </div>
  )
}

export default AnimeCard;