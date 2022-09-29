import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeApiHeaders = {

};

const baseUrl = '';

const createRequest = (url) => ({ url, headers: animeApiHeaders });

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({

    })
});