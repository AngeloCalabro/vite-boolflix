<template>
    <div class="media text-center">
        <img class="w-100"
            :src="item.poster_path ? imgBasePath + item.poster_path : 'https://via.placeholder.com/342x500.png'"
            :alt="item.title">
        <h4 class="fw-bold">{{ item.original_title || item.original_name }}</h4>
        <div>{{ item.title || item.name }}</div>
        <div>
            <span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
        </div>
        <div class="flag" v-if="availableFlag.includes(item.original_language)">
            <img :src="'/images/' + item.original_language + '.png'" :alt="item.original_language">
        </div>
        <div v-else><em>Country:</em> {{ item.original_language }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            availableFlag: [
                'de', 'fr', 'it', 'es'
            ],
            imgBasePath: 'https://image.tmdb.org/t/p/w342',

        }
    },
    computed: {
        stars() {
            return Math.ceil(this.item.vote_average / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
.media {
    width: 200px;
}

.flag {
    img {
        width: 50px;
    }
}
</style>