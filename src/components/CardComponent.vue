<template>
        <!-- <div class="item card">
            <img class="w-100" src="" :alt="item.name">
            <div>{{ item.name }}</div>
        </div> -->
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