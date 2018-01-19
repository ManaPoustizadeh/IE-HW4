<template>
  <b-card class="m-4">
    <div class="row justify-content-center ">
      <div class="col-lg-5 col-xs-12">
        <div class="row text-center justify-content-center mb-4">
          <div class="col-lg-3 col-xs-12 blue"><b>کارگردانی</b></div>
          <div class="col-lg-3 col-xs-12 blue">{{directorScore + ' از 10'}}</div>
          <range-slider
            class="col-lg-4 col-xs-12 mx-auto p-0 slider"
            min="0"
            max="10"
            step="1"
            v-model="directorScore">
          </range-slider>
        </div>
        <div class="row text-center justify-content-center mb-4">
          <div class="col-lg-3 col-xs-12 blue"><b>بازیگری</b></div>
          <div class="col-lg-3 col-xs-12 blue">{{writingScore + ' از 10'}}</div>
          <range-slider
            class="col-lg-4 col-xs-12 mx-auto p-0 slider"
            min="0"
            max="10"
            step="1"
            v-model="writingScore">
          </range-slider>
        </div>
        <div class="row text-center justify-content-center ">
          <div class="col-lg-3 col-xs-12 blue"><b>فیلمنامه</b></div>
          <div class="col-lg-3 col-xs-12 blue">{{actingScore + ' از 10'}}</div>
          <range-slider
            class="col-lg-4 col-xs-12 mx-auto p-0 slider"
            min="0"
            max="10"
            step="1"
            v-model="actingScore">
          </range-slider>
        </div>
      </div>
      <img class="rounded-circle d-block mt-lg-0 mt-5 mb-lg-0 mb-3" height="80px" :src="userAvatar" />
      <div class="col-lg-6 col-xs-12">
        <b-card class="rounded">
          <b-form-textarea type="text" v-model="text" :rows="3" :max-rows="6" class="border-0 input"></b-form-textarea>
          <b-form-group>
            <b-form-checkbox name="no-opinion">نظری ندارم</b-form-checkbox>
            <b-form-checkbox name="no-opinion">پیشنهاد نمی‌کنم</b-form-checkbox>
            <b-form-checkbox name="no-opinion">پیشنهاد می‌کنم</b-form-checkbox>
          </b-form-group>
        </b-card>
        <div class="text-left">
          <b-button class="green my-3">ثبت دیدگاه</b-button>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
// import 'rui-vue-emoji/dist/vue-emoji.css';
// import VueEmoji from 'rui-vue-emoji'
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css';
  export default {
    components: {
      RangeSlider,
    },
    data() {
        return {
        directorScore: 2,
        writingScore: 5,
        actingScore: 6,
        text: '',
        date: '',
        recommend: true,
      }
    },
    props: {
      userAvatar: {
        type: String,
      },
      userName: {
        type: String,
      },
      // date: {
      //   type: String,
      // },
      // text: {
      //   type: String,
      // },
      // upVoteCount: {
      //   type: Number,
      // },
      // downVoteCount: {
      //   type: Number,
      // },
      // recommend: {
      //   type: String
      // }
    }
  };
</script>

<style>

.range-slider {
  display: inline-block;
  padding: 0  10px;
  height: 5px;
  width: 200px;
}
.range-slider-inner {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
}
.range-slider-rail,
.range-slider-fill {
  background: rgb(58, 110, 232);
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: 5px;
  border-radius: 10px;
  transform: translateY(-50%);
}
.range-slider-rail {
  width: 100%;
  background-color: rgb(160, 160, 160);
}
.range-slider-knob {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  /* box-shadow: 1px 1px rgba(0, 0, 0, 0.2); */
  transform: translate(-50%, -50%);
  cursor: pointer;
  background: rgb(58, 110, 232);
  border: 0px;
  height: 15px;
  width: 28px;
  border-radius: 7px;
}
.range-slider-hidden {
  display: none;
}
  .progress{
    max-height: 4px;
    max-width: 150px;
  }
  .blue{
    color: blue;
  }
  .green{
    background-color: #1dc974;
    border: none;
  }
  .input:active , .input:focus{
    outline: none;
    box-shadow: none;
  }

  .custom-checkbox{
    font-size: 13px;
  }

  .card-body{
    padding-bottom: 0px;
  }

  .b-form-group{
    margin-bottom: 0px
  }
  /* .input{
    min-height: 100px;
  } */
</style>
