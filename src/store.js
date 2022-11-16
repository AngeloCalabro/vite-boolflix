import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    apiEndpointTv: 'tv/popular',
    apiEndpointFilm: 'movie/popular',
    apiKEY: '?api_key=a8049b8c9e734e7c0f349c01d64a7f91',
    itemListTv: [],
    itemListFilm: [],
    loading: false,
    errormessage: '',
    path: 'https://image.tmdb.org/t/p/w300',
    name: '',
    title: '',
});