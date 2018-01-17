<template>
  <section class="container mb-5">
    <div>
      <search-container title="جستجوی فلان و بیسار و اینا"></search-container>
      <static-banner :title="homepageData.staticBannerTitle" 
                     :subTitle="homepageData.staticBannerSubTitle" 
                     :img="homepageData.staticBanner" 
                     :color="homepageData.staticBannerBackColor"
                     :textColor="homepageData.staticBannerTextColor">
      </static-banner>
      <movie-carousel title="داغ‌ترین‌ها"></movie-carousel>
      {{homepageData}}
    </div>
  </section>
</template>

<script>
import SearchContainer from '~/components/MainPage/SearchContainer.vue';
import StaticBanner from '~/components/MainPage/StaticBanner.vue';
import MovieCarousel from '~/components/MainPage/MovieCarousel.vue';
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      homepageData: 'homepage/getState'
    })
  },
  async fetch ({store, params}) {
    await store.dispatch('homepage/getHomepageData');
  },
  components: {
    SearchContainer,
    StaticBanner,
    MovieCarousel,
  }
}
</script>

<style>

</style>
