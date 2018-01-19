<template>
    <div class="container row py-3  w-100 justify-content-around">
        <div class="row w-100">
            <span class="push-right">{{title}}</span>
            <span class="mr-auto d-flex align-items-center">
                <span>مشاهده همه</span>
                <i class="fa fa-chevron-left mr-2" aria-hidden="true"></i>
            </span>
            <hr class="w-100 mt-1">
        </div>
        
        <film-card v-for="movie in movies" 
                   :key="movie.id" 
                   :id="movie.id"
                   :name="movie.title"
                   :genres="movie.genres"
                   :quality="movie.quality"
                   :rate="movie.rate"
                   :year="movie.year"
                   :thumbnail="movie.thumbnail" >

        </film-card>
    </div>
</template>

<script>
import FilmCard from '~/components/FilmCard.vue';

export default {
    data() {
        let films = [
            {
                name: 'folan film',
                genres: [
                    'اکشن',
                    'پکشن',
                ],
                quality: 'Bluray',
                rate: 2.3,
                translate: 'فلان',
                year: '2017'
            },
            {
                name: 'bahman fil,',
                genres: [
                    'درام',
                ],
                quality: 'Bluray',
                rate: 8.1,
                translate: 'فلان',
                year: '2017'
            },
            {
                name: 'film',
                genres: [
                    'اکشن',
                    'درام',
                ],
                quality: 'DVDScr',
                rate: 7.0,
                translate: 'فلان',
                year: '2017'
            },
        ]
        return {
            films,
        }
    },
    components: {
        FilmCard,
    }, 
    props: {
        title: {
            type: String, 
        },
        movies: {
            type: Array,
        }
    }
}
</script>

<style>

</style>
