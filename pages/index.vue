<template>
  <section class="container mb-5">
    <div>
      <search-container title="جستجوی فلان و بیسار و اینا" :img="homepageData.searchBackground"></search-container>
      <movie-carousel class="text-white" title="جدیدترین‌ها" :movies="homepageData.hottestMovies" color="black"></movie-carousel>
      <static-banner :title="homepageData.staticBannerTitle" 
                     :subTitle="homepageData.staticBannerSubTitle" 
                     :img="homepageData.staticBanner" 
                     :color="homepageData.staticBannerBackColor"
                     :textColor="homepageData.staticBannerTextColor">
      </static-banner>
      <movie-carousel title="داغ‌ترین‌ها" :movies="homepageData.hottestMovies" color="white"></movie-carousel>
    </div>
  </section>
</template>

<script>
import SearchContainer from '~/components/MainPage/SearchContainer.vue';
import StaticBanner from '~/components/MainPage/StaticBanner.vue';
import MovieCarousel from '~/components/MainPage/MovieCarousel.vue';
import {mapGetters} from 'vuex';

export default {
  middleware: ['loggedIn'],
  data() {
    return {
       list: [
                {
                    url: 'url1'
                },
                {
                    url: 'url2'
                },
                {
                    url: 'url3'
                },
            ]
    }
  },
  computed: {
    ...mapGetters({
      homepageData: 'homepage/getState'
    })
  },
  async fetch ({store, params}) {
    await store.dispatch('homepage/getHomepageData');
    await store.dispatch('homepage/getRecentMovies');
  },
  components: {
    SearchContainer,
    StaticBanner,
    MovieCarousel,

  }
}
</script>

<style scoped>
  a:hover, a:active, a:focus {
    text-decoration: none;
  }

  
.item{
    height: 280px;
}

.movie-filter{
    color: #FFFFFF;
    font-size: 12px;
}

.active-filter{
    color: #FFFFFF;
    font-size: 12px;
    background-color: #707070;
    border: solid 1px #FFFFFF;
    border-radius: 5px;
}

.new-title{
    color: #FFFFFF;

}

.movie-hover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: black;
    z-index: 100000;
    text-align: center;
}

.item:hover .movie-hover {
    opacity: 0.7;
}

.movie-title {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

</style>
