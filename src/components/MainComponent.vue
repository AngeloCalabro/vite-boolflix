<template>
    <main>
        <section class="container">
        <h1>Serie tv popolari</h1>
        <div class="text-center fw-bold" v-if="store.loading">
            Loading...
        </div>
            <div class="d-flex my-overflow" v-if="!store.loading">
                <div v-for="(item, index) in store.itemListTv" :key="index">
                    <div class="card my-card text-center">
                        <img class="w-100" :src="(store.path + item.poster_path)" :alt="( item.name || item.title )">
                        <div class="fw-bold">{{item.name || item.title}}</div>
                        <div>{{ item.original_name || item.original_title }}</div>
                        <div>{{ item.original_language }}</div>
                        <div>Voto: {{ item.vote_average }}</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
        <h1>Film Popolari</h1>
        <div class="text-center fw-bold" v-if="store.loading">
            Loading...
        </div>
            <div class="d-flex my-overflow" v-if="!store.loading">
                <div v-for="(item, index) in store.itemListFilm" :key="index" >
                    <div class="card my-card text-center">
                        <img class="w-100" :src="(store.path + item.poster_path)" :alt="( item.name || item.title )">
                        <div class="fw-bold">{{item.name || item.title}}</div>
                        <div>{{ item.original_name || item.original_title }}</div>
                        <div>{{ item.original_language }}</div>
                        <div>Voto: {{ item.vote_average }}</div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
</template>

<script>
import axios from "axios";
import {store} from '../store';
import CardComponent from "./CardComponent.vue";
    export default {
    name: "MainComponent",
    data() {
        return {
            store
        };
    },
    methods: {
        getItem() {
            //     store.errormessage = '';
                store.loading = true;
            axios.get(this.apiTv).then((res) => {
                console.log(res.data.results);
                store.itemListTv = res.data.results;
                // store.loading = false;
            }).catch((error) => {
                //         store.itemList.length = 0;
                        store.loading = false;
                //         store.errormessage = error.message
                console.log(error.message);
                //         // console.log(error.response.status);
            });
            axios.get(this.apiFilm).then((res) => {
                console.log(res.data.results);
                store.itemListFilm = res.data.results;
                store.loading = false;
            }).catch((error) => {
                    //         store.itemList.length = 0;
                            store.loading = false;
                    //         store.errormessage = error.message
                    console.log(error.message);
                    //         // console.log(error.response.status);
            });
        }
    },
    computed: {
        apiTv() {
            return store.apiURL + store.apiEndpointTv + store.apiKEY;
        },
        apiFilm() {
            return store.apiURL + store.apiEndpointFilm + store.apiKEY;
        }
    },
    created() {
        this.getItem();
    },
    mounted() {
        // console.log(this.apiTv)
        // console.log(this.apiFilm)
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped>
section{
    .my-overflow{
        overflow-x: auto;
        .my-card{
            width: 200px;
        }
    }
}
</style>