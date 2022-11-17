<template>
  <HeaderComponent />
  <main>
    <MainComponent title="Movies" :items="store.movie" mediaType="movie" />
    <MainComponent title="Tv Series" :items="store.tv" mediaType="tv" />
    <MainComponent title="Popular Movies" :items="store.popularMovie" mediaType="popularMovie" />
    <MainComponent title="Popular Tv Series" :items="store.popularTv" mediaType="popularTv" />
  </main>
</template>

<script>
import axios from 'axios';
import { store } from './store'
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue';
export default {
  components: { HeaderComponent, MainComponent },
  data() {
    return {
      store
    }
  },
  watch: {
    'store.params.query'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getMovie();
        this.getSeries();
      }
      console.log(newVal);
      console.log(oldVal);
      return
    }
  },
  methods: {
    getMovie() {
      store.loading.movie = true;
      const apiurl = store.baseURL + store.endpoint.movie;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        // console.log(res.data.results)
        store.movie = res.data.results;
        store.loading.movie = false;
      })
    },
    getSeries() {
      store.loading.tv = true;
      const apiurl = store.baseURL + store.endpoint.tv;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        // console.log(res.data.results)
        store.tv = res.data.results;
        store.loading.tv = false;
      })
    },
    getPopularMovie() {
      store.loading.popularMovie = true;
      const apiurl = store.baseURL + store.endpoint.popularMovie;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        // console.log(res.data.results)
        store.popularMovie = res.data.results;
        store.loading.popularMovie = false;
      })
    },
    getPopularTv() {
      store.loading.popularTv = true;
      const apiurl = store.baseURL + store.endpoint.popularTv;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        // console.log(res.data.results)
        store.popularTv = res.data.results;
        store.loading.popularTv = false;
      })
    }
  },
  created() {
    this.getPopularMovie();
    this.getPopularTv();
  }

}
</script>

<style lang="scss" scoped>

</style>