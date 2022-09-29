import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApiHeaders = {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
};

const baseUrl = 'https://kitsu.io/api/edge';

const createRequest = (url) => ({ url, headers: animeApiHeaders });

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAnimeList: builder.query({
            query: () => createRequest('/anime'),
        }),
    })
});

export const { useGetAnimeListQuery } = animeApi;