<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                    <div class="img-box text-center">
                        <img class="w-100 rounded-1" :src="item.poster_path ? imgBasePath + item.poster_path : 'https://via.placeholder.com/330x500.png?text=Poster+Unknow'" :alt="item.title">
                        <span class="fw-bold title">{{ item.original_title || item.original_name }}</span>
                    </div>
            </div>
            <div class="flip-card-back rounded-1 p-3">
                <div class="fw-bold">{{ item.title || item.name }}</div>
                <div>
                    <span v-for="n in 5" class="fa-star" :class="(n <= stars) ? 'fa-solid' : 'fa-regular'"></span>
                </div>
                <div class="flag" v-if="availableFlag.includes(item.original_language)">
                    <img :src="'/images/' + item.original_language + '.svg'" :alt="item.original_language">
                </div>
                <div v-else>
                    <em>Country:</em> <b class="text-uppercase">{{ item.original_language }}</b>
                </div>
                <p class="p-overview py-1">
                <em>Trama:</em><br>
                    {{ item.overview || 'Unknow'}}
                </p>
            </div>
        </div>
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
                'de', 'fr', 'it', 'es', 'uk', 'en'
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
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;
.media {
    width: 200px;
}

 .flip-card{
        width: 300px;
        height: 500px;
        padding: 0.5rem;
        background-color: white;
        border: 4px solid $dark-dc;
        perspective: 1000px;
        border-radius: 1rem;
        .flip-card-inner{
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            .flip-card-front, .flip-card-back{
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
        }
        .flip-card-back{
            height: 100%;
            transform: rotateY(180deg);
            background-color: $black;
            color: $red;
            overflow: hidden;
            .flag {
                    img {
                        width: 50px;
                    }
            }
            .p-overview{
                padding: 0.5rem;
                height: 350px;
                overflow-y: auto;
                font-size: $fs-xs;
            }
        }
        &:hover .flip-card-inner{
            transform: rotateY(180deg);
        }
        .title{
            @include myText(0.9rem);
            color: black; 
        }
        .img-box{
            overflow: hidden;
            margin-bottom: 0.5rem;
        }
    }
</style>