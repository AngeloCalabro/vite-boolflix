import { reactive } from "vue";

export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popularMovie: 'movie/popular',
        popularTv: 'tv/popular',
    },
    loading: {
        movie: false,
        tv: false,
        popularMovie: false,
        popularTv: false
    },
    params: {
        api_key: 'a8049b8c9e734e7c0f349c01d64a7f91',
        query: '',
        language: 'it-IT'
    },
    movie: [],
    tv: [],
    popularMovie: [],
    popularTv: [],

});