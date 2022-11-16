<template>
    <form class="d-flex align-items-center" @submit.prevent="store.searchItem">
        <input class="form-control" type="text" placeholder="Search..." v-model.trim="store.name">
        <button type="submit" class="btn btn-primary">Search</button>
    </form>
</template>

<script>
import {store} from '../store'
    export default {
        name: 'SearchComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>