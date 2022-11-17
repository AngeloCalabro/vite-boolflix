<template>
    <form class="d-flex align-items-center" @submit.prevent="searchItem">
        <input class="form-control" type="text" placeholder="Search..." v-model.trim="text">
        <button type="submit" class="btn btn-danger">Search</button>
    </form>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SearchComponent',
    data() {
        return {
            text: '',
        }
    },
    methods: {
        searchItem() {
            console.log(this.text);
            store.params.query = this.text;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>