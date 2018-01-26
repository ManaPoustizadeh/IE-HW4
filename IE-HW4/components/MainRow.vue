<template>
    <div>
        <div class="row container bluRay">
            <span class="bluRay-text"><b>{{quality}}</b></span>
        </div>
        <div class="my-3">
            <div class="d-md-flex d-none my-1 justify-content-center" 
                 v-for="(resolution,index) in resolutions" 
                 :key="resolution.name+' '+index+' '+quality">
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
            <div class="download-card mb-2 card d-md-none d-block my-1 justify-content-center" 
                 v-for="(resolution,index) in resolutions" 
                 :key="resolution.name+' '+index+' '+quality+' mobile'"
                 :class="'border-'+colorVariants[index%5]">
                <div class="card-body w-100 justify-content-center text-center">
                    <div>
                        <h2 :class="'d-inline text-'+colorVariants[index%5]">
                            {{resolution.name}}
                        </h2>
                        <span>
                            {{quality}}
                        </span>
                    </div>
                    <div>
                        <span class="mx-1">{{resolution.encoder}} </span>
                        <span class="download-size"><b>{{resolution.size}}</b></span>
                    </div>
                    <div class="mt-5 download-icons">
                        <span class="badge rounded-circle bg-dark text-light mx-3 p-3">
                            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                        </span>
                        <span class="badge rounded-circle bg-dark text-white mx-3 p-3">
                            <i class="fa fa-download" aria-hidden="true"></i>
                        </span>
                        <span class="badge rounded-circle bg-dark text-white mx-3 p-3">
                            <i class="fa fa-flag-o" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div :class="'download-card-bottom bg-'+colorVariants[index%5]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let colorVariants = [
            'success',
            'warning',
            'info',
            'primary',
            'danger'
        ]
        return {
            colorVariants,
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

<style scoped>
    .download-card {
        height: 200px;
        border-width: 2px;
    }

    .encoder {

    }

    .download-icons {
        position: relative;
        z-index: 2000;
    }

    .download-card-bottom {
        position: absolute;
        width: 100%;
        height: 50px;
        right: 0;
        bottom: 0;
    }

    .download-card-bottom .badge{
        font-size: 18px;
    }
</style>
