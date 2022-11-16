<template>
    <header>
        <div class="container d-flex justify-content-between">
            <h1>Boolflix</h1>
            <SearchComponent/>
        </div>
    </header>
</template>

<script>
import SearchComponent from './SearchComponent.vue';

    export default {
    name: "HeaderComponent",
    components: { SearchComponent }
}
</script>

<style lang="scss" scoped>
header{
    background-color: black;
    h1 {
            color: red;
            font-weight: 700;
        }
}
</style>