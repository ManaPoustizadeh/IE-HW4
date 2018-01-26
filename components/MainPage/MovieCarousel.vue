<template>
    <div class="container row w-100 justify-content-around">
        <div class="container-background" :style="{background: color}"></div>
        <div class="row w-100 mt-3">
            <span class="push-right">{{title}}</span>
            <span class="mr-auto d-flex align-items-center">
                <span>مشاهده همه</span>
                <i class="fa fa-chevron-left mr-2" aria-hidden="true"></i>
            </span>
            <hr class="w-100 mt-1 bg-white">
        </div>
        <no-ssr>
            <div :style="{direction: 'ltr'}" class="w-100">
                <carousel :perPage="5" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :navigationEnabled="true">
                    <slide v-for="movie in movies" :key="movie.id">
                        <film-card  
                                :id="movie._id"
                                :name="movie.title"
                                :genres="movie.genres"
                                :quality="movie.quality"
                                :rate="movie.rate"
                                :year="movie.year"
                                :thumbnail="movie.thumbnail" >
                        </film-card>
                    </slide>
                </carousel>
            </div>
        </no-ssr>
    </div>
</template>

<script>
import FilmCard from '~/components/FilmCard.vue';
import { Carousel, Slide } from 'vue-carousel';

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
        Carousel,
        Slide,
    }, 
    props: {
        title: {
            type: String, 
        },
        movies: {
            type: Array,
        },
        color: {
            type: String,
        }
    }
}
</script>

<style scoped>
    .container-background {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -2;
        left: 0;
    }
</style>
