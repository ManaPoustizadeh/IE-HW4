<template>
    <div>
        <div class="row container bluRay">
            <span class="bluRay-text"><b>{{quality}}</b></span>
        </div>
        <div class="my-3">
            <div class="d-flex my-1 justify-content-center" v-for="resolution in resolutions" :key="resolution.name">
                <div class="size text-center" :style="{minWidth: '130px'}">
                    <i class="fa fa-download download-icon" aria-hidden="true"></i>
                    <span>{{resolution.size}}</span>
                </div>
                <span class="language">ف</span>
                <span class="dl-basket">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                </span>
                <span class="dl-flag1080 col-sm-1">
                    <i class="fa fa-flag-o fa-lg" aria-hidden="true"></i>
                </span>
                <span class="movie-desc1080 col-sm-4 float-left">
                    <span class="download-desc">{{resolution.encoder}}</span>
                    <span class="download-desc">{{resolution.language}}</span>
                    <span class="download-desc green-color">{{resolution.codec}}</span>
                </span>
                <span class="movie-desc1080 quality1080" :style="{minWidth: '180px'}">
                    <span>{{quality}}</span>
                    <span><b> {{resolution.name}}</b></span>
                </span>
            </div>
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
        quality: {
            type: String,
        },
        resolutions: {
            type: Array,
        }
    }
}
</script>

<style>

</style>
