<template>
    <div class="">
    <div class="d-flex container comment justify-content-around">
        <div class="text-success">
            <h5 class="value mb-2">ارزش دانلود 8 از 10</h5>
            <b-progress :value="downloadRate" :max="10" height="5px" variant="success"></b-progress>
            <div class="val-desc mt-1">نتایج آرا کاربران بر اساس کارگردانی + بازیگری + فیلمنامه</div>
        </div>
        <div class="col-sm-3 recommend text-center">{{positiveVotes}} نفر از {{totalVotes}} نفر این فیلم را پیشنهاد کردند.</div>
        <div class="col-sm-3 text-center">
            <div class="your-rate">شما هم بر اساس ارزش دانلود به فیلم رای دهید.</div>
            <b-button variant="primary" class="mt-3">امتیاز دهید</b-button>
        </div> 
    </div>
    <hr>
    <div class="row justify-content-md-start justify-content-center">
        <div class="col-sm-2 options-menu pb-3 pb-md-2">
            <span class="options-menu-lang">همه زبان‌ها</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu pb-3 pb-md-2">
            <span class="options-menu-item">ریلیز</span>
            <span class="options-all">همه</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu pb-3 pb-md-2">
            <span class="options-menu-item">نوع</span>
            <span class="options-all">همه</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu pb-3 pb-md-2">
            <span class="options-menu-item">رزولوشن</span>
            <span class="options-all">همه</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <i class="fa fa-list-ul fa-2x options-menu list-button" aria-hidden="true"></i>
        <i class="fa fa-th fa-2x options-menu list-button" aria-hidden="true"></i>
        <span class="options-menu guide">راهنما</span>
    </div>
    <div class="row float-left radio-holder">
        <b-form-group>
            <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                <b-form-radio value="advanced">پیشرفته</b-form-radio>
                <b-form-radio value="pro">حرفه‌ای</b-form-radio>
            </b-form-radio-group>
        </b-form-group>
    </div>
    <main-row v-for="quality in qualities" 
              :key="quality"
              :quality="quality"
              :resolutions="resolutions"
              ></main-row>
    <div class="row container bluRay">
        <span class="bluRay-text"><b>موسیقی متن</b></span>
    </div>
    <div class="row movie-row justify-content-center d-md-block d-none">
        <span class="size">
            <i class="fa fa-download download-icon" aria-hidden="true"></i>
            <span>951MB</span>
        </span>
        <span class="dl-basket">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
        </span>
        <span class="dl-flag-music col-sm-1">
            <i class="fa fa-flag-o fa-lg" aria-hidden="true"></i>
        </span>
        <span class="music-desc col-sm-2">
            <span class="download-desc blue-color">128kbps</span>
        </span>
        <span class="music-desc">
            <img class="music-img" src="~/assets/img/music.gif">
        </span>
        <span class="music-desc duration">
            <span>BluRay</span>
        </span>
    </div>
    <div class="download-card mb-2 mt-3 card d-md-none d-block my-1 justify-content-center" 
            :key="'music-mobile'">
        <div class="card-body w-100 justify-content-center text-center">
            <div>
                <h2 :class="'d-inline text-dark'">
                    320K
                </h2>
                <span>
                    Zip
                </span>
            </div>
            <div>
                <span class="mx-1">Ganool </span>
                <span class="download-size"><b>120 Mb</b></span>
            </div>
            <div class="mt-5 download-icons">
                <span class="badge rounded-circle bg-secondary text-light mx-3 p-3">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                </span>
                <span class="badge rounded-circle bg-secondary text-white mx-3 p-3">
                    <i class="fa fa-download" aria-hidden="true"></i>
                </span>
                <span class="badge rounded-circle bg-secondary text-white mx-3 p-3">
                    <i class="fa fa-flag-o" aria-hidden="true"></i>
                </span>
            </div>
            <div :class="'download-card-bottom bg-light'">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import MainRow from "~/components/MainRow.vue";
import '~/assets/download.css';
export default {
    data() {
        return {
            selected: {
                value: 'pro',
                checked: true,
            }
        }
    },
    props: {
        downloadRate: {
            type: Number,
        },
        positiveVotes: {
            type: Number,
        },
        totalVotes: {
            type: Number,
        },
        qualities: {
            type: Array,
        },
        resolutions: {
            type: Array,
        }
    },
    components: {
        MainRow,
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
