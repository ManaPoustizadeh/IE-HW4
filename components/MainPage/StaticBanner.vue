<template>
    <div class="container banner-container row text-right w-100 justify-content-start align-items-start" :style="{backgroundColor: color, color: textColor}">
        <div class="mt-5 mr-3 position-absolute text-white">
            <h3>
                {{title}}
            </h3>
            <sub>
                {{subTitle}}
            </sub>
            <div class="mt-3">
                <b-button variant="outline-secondary" class="p-2 banner-button">
                    همین الان دانلود کن
                </b-button>
            </div>
        </div>
        <!-- put the same button we used in search container here too -->
        <img src="~/assets/img/banner.png" alt="" class="pull-left">
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        color: {
            type: String, 
        }, 
        img: {
            type: String, 
        }, 
        title: {
            type: String, 
        }, 
        subTitle: {
            type: String, 
        },
        textColor: {
            type: String,
        }
    }
}
</script>

<style scoped>
    .banner-container {
        min-height: 200px;
    }

    .banner-button {
        border-color: white;
        color: white;
        transition: 0.5s ease;
    }

    .banner-button:hover, .banner-button:active {
        outline: none; 
        background-color: transparent;
        box-shadow: none;
        border-color: #dadada;
        color: #dadada;
    }
</style>
