<template>
    <section class="container-fluid">
        <h2 v-show="store.params.query ? title : ''">{{ title }}</h2>
        <div v-if="store.loading[mediaType]">
            Loading...
        </div>
        <div class="d-flex my-overflow" v-if="!store.loading[mediaType]">
            <div class="mx-1" v-for="(item, index) in items" :key="item.id">
                <CardComponent :item="item" />
            </div>
        </div>
    </section>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store';
export default {
    name: "MainComponent",
    components: { CardComponent },
    props: {
        items: Array,
        title: String,
        mediaType: String
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    .my-overflow {
        overflow-x: auto;
    }
}
</style>