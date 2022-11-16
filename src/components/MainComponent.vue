<template>
    <main>
        <section class="container">
            <div class="d-flex">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.itemList" :key="index">
                 <div class="card">{{item.title}}</div>
                
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
        mounted() {
            // console.log(this.apiTv)
            // console.log(this.apiFilm)
        },
    }
</script>

<style lang="scss" scoped>

</style>