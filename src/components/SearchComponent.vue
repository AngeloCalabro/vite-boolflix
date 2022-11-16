<template>
    <form class="d-flex align-items-center" @submit.prevent="searchItem">
        <input class="form-control" type="text" placeholder="Search...">
        <button class="btn btn-primary">Search</button>
    </form>
</template>

<script>
    export default {
        name: 'SearchComponent'
    }
</script>

<style lang="scss" scoped>

</style>