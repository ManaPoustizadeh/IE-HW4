<template>
    <nuxt-link :to="'/movie/'+id">
    <div class="film-card text-center d-flex flex-wrap align-items-center justify-content-center" v-on:mouseenter="overlay" v-on:mouseleave="overlay">
        <div class="film-card-top align-self-start" :style="{backgroundColor: colorTop}">
        </div>
        <div class="film-card-bottom" :style="{backgroundColor: colorBottom}">
        </div>
        <div class="container film-container">
            <img :src="thumbnail" alt="" height="220px" class="thumbnail w-100">
            <div class="d-flex w-100 justify-content-center align-items-center mt-2">
                <span v-for="genre in genres" :key="genre" class="badge badge-light p-1 w-100">{{genre}}</span>
            </div>
            <div class="d-flex w-100 justify-content-center align-items-center mt-2">
                <span class="badge p-1 w-100 film-rate rounded">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    {{rate}}
                </span>
                <span class="badge p-1 w-100 film-quality rounded mr-1">{{quality}}</span>
            </div>
        </div>
        <transition name="fade" class="fade-enter-active fade-leave-active">
          <film-card-overlay class="overlay" v-if="seen" :title="name" :translate="translate" :year="year" ></film-card-overlay>
        </transition>
    </div>
    </nuxt-link>
</template>

<script>
import FilmCardOverlay from '~/components/FilmCardOverlay.vue';
export default {
    data() {
        let colorTop = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let colorBottom = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let seen = false;
        return {
            colorTop,
            colorBottom,
            seen
        }
    },
    props: {
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        genres: {
            type: Array,
        },
        thumbnail: {
            type: String,
        },
        quality: {
            type: String,
        },
        rate: {
            type: Number,
        },
        translate: {
            type: String,
        },
        year: {
            type: Number,
        }
    },
    components: {
        FilmCardOverlay,
    },
    methods:{
        overlay: function () {
            this.seen = !this.seen;
        }
    }
}
</script>

<style scoped>
    .fa-star {
        color: gold;
    }

    .film-rate, .film-quality {
        border: 1px solid rgba(22, 22, 22, 0.753);
        color: #333;
    }

    .film-rate:focus, .film-rate:hover, .film-quality:hover, .film-quality:focus {
        text-decoration: none;
        color: #333;
    }

    .film-card {
        height: 311px;
        width: 234px;
        position: relative;
    }
    .film-card-top {
        width: 234px;
        height: 155px;
        position: absolute;
        z-index: -1;
    }
    .film-card-bottom  {
        width: 234px;
        top: 155px;
        height: 156px;
        position: absolute;
        z-index: -1;
    }
    .film-container {
        width: 200px;
    }

    .thubmnail {
        z-index: 1000;
    }
</style>
