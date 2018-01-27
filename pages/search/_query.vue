<template>
    <div class="container p-5">
        <h5 class="text-black text-right">
            نتایج جستجو
        </h5>
        <hr>
        <div class="d-flex flex-wrap">
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
                class="mx-1 my-1"
            ></film-card>
        </div>
        <!-- {{searchResults}} -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilmCard from '~/components/FilmCard.vue';
import axios from 'axios';

export default {
    async fetch({store, params}) {
        // store.dispatch('movie/search', params.query);
        
    },
    async asyncData({params}) {
        let searchResults = [];
        var url = '';
        if(params.query && params.query.indexOf('bootstrap')== -1) {
            url = 'http://127.0.0.1:3000/api/search?q=' + encodeURIComponent(params.query);
        }
        else if(!params.query) {
            url = 'http://127.0.0.1:3000/api/search?q=';
        }
        try {
                        const results = (await axios.get(url)).data;
                        // console.log(results);
                        searchResults = results;
                        // commit('SET_RESULT_MOVIES', results);
                    } catch (error) {
                        console.log(error);
                    }
        return {
            searchResults,
        }
    },
    methods: {
        // ...mapGetters({
        //     searchResults: 'movie/searchResults',
        // }),
    },
    components: {
        FilmCard,
    }
}
</script>

<style>

</style>
