<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import { axios } from "axios";
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import {store} from './store'

  export default {
    components: { HeaderComponent, MainComponent },
    data(){
      return{
        store,
        apiURL: 'https://api.themoviedb.org/3/v/popular?api_key=a8049b8c9e734e7c0f349c01d64a7f91',
      }
  },
  methods: {
    getItem() {
      //     store.errormessage = '';
      //     let options = null;
      //     store.loading = true;
      axios.get(this.apiURL).then(
        (res) => {
          store.itemList = res.data.results;
          // store.loading = false;
        }
      )
      //.catch((error) => {
      //         store.itemList.length = 0;
      //         store.loading = false;
      //         store.errormessage = error.message
      //         // console.log(error.message);
      //         // console.log(error.response.status);
      //     })
    }
  },
  created() {
    this.getItem()
  },
}
</script>

<style lang="scss" scoped>

</style>