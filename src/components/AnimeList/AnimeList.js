import React from 'react';
import { useGetTrendingAnimeListQuery } from '../../services/animeApi';
import AnimeCard from '../AnimeCard/AnimeCard';

import './AnimeList.css';

const AnimeList = () => {

    const { data, isFetching } = useGetTrendingAnimeListQuery();
    console.log(data?.data);



    if (isFetching) return 'Loading...';

  return (
    <div className='container'>
        {data?.data.map((anime) => (
            <AnimeCard anime={anime} key={anime.id} />
        ))}
    </div>
  )
}

export default AnimeList;