<template>
    <form class="d-flex align-items-center" @submit.prevent="searchItem()">
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
        },
        watch(newV, oldV){
            this.searchItem()
        },
        methods: {
            // searchItem() {
            //     this.$emit('filteritem');
            // },
        }
    }
</script>

<style lang="scss" scoped>

</style>