<template>
    <main>
        <section class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.itemList" :key="id">
                
                </div>
            </div>
        </section>
    
    </main>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'MainComponent',
        data(){
            return{
                store
            }
        },
        methods:{
            // getItem(){
            //     store.errormessage = '';
            //     let options = null;
            //     store.loading = true;
            //     axios.get(apiTv, options).then(
            //         (res) => {
            //             store.itemList = res.data.results;
            //             store.loading = false;
            //         }
            //     ).catch((error) => {
            //         store.characterList.length = 0;
            //         store.loading = false;
            //         store.errormessage = error.message
            //         // console.log(error.message);
            //         // console.log(error.response.status);
            //     })
            // }
        },
        computed:{
            apiTv(){
                return store.apiURL + store.apiEndpointTv + store.apiKEY
            },
            apiFilm() {
                return store.apiURL + store.apiEndpointFilm + store.apiKEY
            },
            
        },
        created(){
            // this.getItem()
        },
        mounted() {
            // console.log(this.apiTv)
            // console.log(this.apiFilm)
        },
    }
</script>

<style lang="scss" scoped>

</style>