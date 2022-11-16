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

    // methods: {
    //     getItem() {
    //         //     store.errormessage = '';
    //         let options = null
    //         if (this.name && this.title) {
    //             options = {
    //                 params: {
    //                     name: this.name,
    //                     title: this.title
    //                 }
    //             }
    //         } else if (this.name) {
    //             options = {
    //                 params: {
    //                     name: this.name
    //                 }
    //             }
    //         } else if (this.title) {
    //             options = {
    //                 params: {
    //                     title: this.title
    //                 }
    //             }
    //         }
    //         this.loading = true;
    //         axios.get(this.apiTv).then((res) => {
    //             console.log(res.data.results);
    //             this.itemListTv = res.data.results;
    //             // this.loading = false;
    //         }).catch((error) => {
    //             //         this.itemList.length = 0;
    //             this.loading = false;
    //             //         this.errormessage = error.message
    //             console.log(error.message);
    //             //         // console.log(error.response.status);
    //         });
    //         axios.get(this.apiFilm).then((res) => {
    //             console.log(res.data.results);
    //             this.itemListFilm = res.data.results;
    //             this.loading = false;
    //         }).catch((error) => {
    //             //         this.itemList.length = 0;
    //             this.loading = false;
    //             //         this.errormessage = error.message
    //             console.log(error.message);
    //             //         // console.log(error.response.status);
    //         });
    //     }
    // },
    // created() {
    //     this.getItem();
    // },
});