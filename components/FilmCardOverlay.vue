<template>
  <div class="h-100 w-100 behind-overlay">
    <div class="film-overlay h-100 w-100">
    </div>
    <div class="overlay-content align-content-center p-4 text-white w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
        <h3 class="download-title w-100">دانلود فیلم</h3>
        <h4 class="w-100">{{title}}</h4>
        <h3 class="download-title w-100">{{year}}</h3>
        <div class="d-flex w-100 justify-content-around">
            <b-button class="rounded-circle ml-2 text-white d-flex align-items-baseline p-3">
                    <i class="fa fa-download" aria-hidden="true"></i>
            </b-button>
            <b-button class="rounded-circle ml-2 text-white d-flex align-items-baseline p-3">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
            </b-button>
            <b-button class="rounded-circle ml-2 text-white d-flex align-items-baseline p-3">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
            </b-button>
        </div>
        <h4>{{translate}}</h4>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
        },
        translate: {
            type: String,
        },
        year: {
            type: String,
        },
        downloadLink: {
            type: String,
        },
        trailerLink: {
            type: String,
        }
    }
}
</script>

<style scoped>
    .rounded-circle {
        background: transparent;
    }
    .donwload-title {
        color: gold;
    }

    .behind-overlay {
        position: absolute;
        z-index: 4000;
    }
    .film-overlay {
        position: absolute;
        z-index: 2000;
        background: black;
        opacity: 0.5;
    }
    .overlay-content {
        position: absolute;
        z-index: 5000;
        right: 0;
    }
</style>
