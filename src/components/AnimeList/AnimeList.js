import React from 'react';
import { useGetAnimeListQuery } from '../../services/animeApi';
import AnimeCard from '../AnimeCard/AnimeCard';

import './AnimeList.css';

const AnimeList = () => {

    const { data, isFetching } = useGetAnimeListQuery();
    console.log(data?.data);



    if (isFetching) return 'Loading...';

  return (
    <div className='container'>
        {data?.data.map((anime) => (
            <AnimeCard anime={anime} />
        ))}
    </div>
  )
}

export default AnimeList;