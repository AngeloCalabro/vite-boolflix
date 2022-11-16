<template>
        <div class="card item">
            <!-- <img class="img-fluid" :src="item." :alt="(item.name || item.title)">
            <div>{{ item.name || item.title }}</div> -->
        </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        data(){
            return{
                props: {
                    item: Object
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>