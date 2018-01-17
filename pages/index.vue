<template>
  <section class="container mb-5">
    <div>
      <search-container title="جستجوی فلان و بیسار و اینا"></search-container>
      <static-banner title="بروسلی دانلود کن" subTitle="زیرنویس" img="~/assets/img/avatar.png" color="#DAA521"></static-banner>
      <movie-carousel title="داغ‌ترین‌ها"></movie-carousel>
    </div>
  </section>
</template>

<script>
import SearchContainer from '~/components/MainPage/SearchContainer.vue';
import StaticBanner from '~/components/MainPage/StaticBanner.vue';
import MovieCarousel from '~/components/MainPage/MovieCarousel.vue';

export default {
  components: {
    SearchContainer,
    StaticBanner,
    MovieCarousel,
  }
}
</script>

<style>

</style>
