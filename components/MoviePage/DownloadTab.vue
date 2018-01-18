<template>
    <div class="container">
    <ul class="d-flex justify-content-around center download-nav">
        <li class="horizontal active dl-li">دانلود</li>
        <li class="horizontal dl-li">زیرنویس</li>
        <li class="horizontal dl-li">نظر کاربران</li>
        <li class="horizontal dl-li">نقد و بررسی</li>
        <li class="horizontal dl-li">عوامل فیلم</li>
        <li class="horizontal dl-li">جوایز</li>
        <li class="horizontal dl-li">گالری</li>
    </ul>
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
    <div class="row">
        <div class="col-sm-2 options-menu">
            <span class="options-menu-lang">همه زبان‌ها</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu">
            <span class="options-menu-item">ریلیز</span>
            <span class="options-all">همه</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu">
            <span class="options-menu-item">نوع</span>
            <span class="options-all">همه</span>
            <i class="fa fa-angle-down fa-lg opt-menu-angle"></i>
        </div>
        <div class="col-sm-2 options-menu">
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
    <div class="row movie-row justify-content-center">
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

<style>

</style>
