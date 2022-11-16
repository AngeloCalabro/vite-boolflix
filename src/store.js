import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    apiEndpointTv: 'tv/popular',
    apiEndpointFilm: 'movies/popular',
    apiKEY: '?api_key=a8049b8c9e734e7c0f349c01d64a7f91',
    itemList: [],
    loading: false,
    errormessage: '',
});