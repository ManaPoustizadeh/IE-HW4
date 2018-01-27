<template>
    <div class="container p-5">
        <h5 class="text-black text-right">
            نتایج جستجو
        </h5>
        <hr>
        <film-card 
            v-for="movie in searchResults"
            :key="movie._id"
            :id="movie._id"
            :name="movie.title"
            :genres="movie.genres"
            :quality="movie.quality"
            :rate="movie.rate"
            :year="movie.year"
            :thumbnail="movie.thumbnail"
        ></film-card>
        <!-- {{searchResults}} -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilmCard from '~/components/FilmCard.vue';

export default {
    computed: {
        ...mapGetters({
            searchResults: 'movie/searchResults',
        }),
    },
    components: {
        FilmCard,
    }
}
</script>

<style>

</style>
