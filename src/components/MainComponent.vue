<template>
    <main>
        <section class="container">
        <h1>Serie tv popolari</h1>
            <div class="d-flex my-overflow">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.itemList" :key="index">
                <img class="img-fluid" src="" :alt="( item.name || item.title )">
                 <div class="card">{{item.name || item.title}}</div>
                
                </div>
            </div>
        </section>

        <!-- <section class="container">
        <h1>Film Popolari</h1>
            <div class="d-flex my-overflow">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.itemList" :key="index" >
                    <img class="img-fluid" src="" :alt="( item.name || item.title )">
                    <div class="card">{{item.name || item.title}}</div>
        
                </div>
            </div>
        </section> -->
    
    </main>
</template>

<script>
import axios from "axios";
import {store} from '../store';
    export default {
        name: 'MainComponent',
        data(){
            return{
                store,
                apiURL: 'https://api.themoviedb.org/3/tv/popular?api_key=a8049b8c9e734e7c0f349c01d64a7f91',
            }
        },
        methods: {
            getItem() {
                //     store.errormessage = '';
                //     let options = null;
                //     store.loading = true;
                axios.get(this.apiFilm && this.apiTv).then(
                    (res) => {
                        console.log(res.data.results)
                        store.itemList = res.data.results;
                        // store.loading = false;
                    }
                )
                .catch((error) => {
                //         store.itemList.length = 0;
                //         store.loading = false;
                //         store.errormessage = error.message
                        console.log(error.message);
                //         // console.log(error.response.status);
                    })
            }
        },
        computed: {
            apiTv() {
                return store.apiURL + store.apiEndpointTv + store.apiKEY
            },
            apiFilm() {
                return store.apiURL + store.apiEndpointFilm + store.apiKEY
            },
        },
        created() {
            this.getItem()
        },
            mounted() {
                // console.log(this.apiTv)
                // console.log(this.apiFilm)
            },
    }
</script>

<style lang="scss" scoped>
section{
    .my-overflow{
        overflow-x: auto;
    }
}
</style>