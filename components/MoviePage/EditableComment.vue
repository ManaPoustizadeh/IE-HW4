<template>
  <b-card class="m-4 text-right d-flex">
    <div class="row pr-5">
      <div class="col-sm-5">
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>کارگردانی</b></div>
          <div class="col-sm-3 blue">{{directorScore + ' از 10'}}</div>
          <range-slider
            class="slider col-sm-5 p-0"
            min="0"
            max="10"
            step="1"
            v-model="directorScore">
          </range-slider>
        </div>
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>بازیگری</b></div>
          <div class="col-sm-3 blue">{{writingScore + ' از 10'}}</div>
          <range-slider
            class="slider col-sm-5 p-0"
            min="0"
            max="10"
            step="1"
            v-model="writingScore">
          </range-slider>
        </div>
        <div class="row text-right ">
          <div class="col-sm-3 blue"><b>فیلمنامه</b></div>
          <div class="col-sm-3 blue">{{actingScore + ' از 10'}}</div>
          <range-slider
            class="slider col-sm-5 p-0"
            min="0"
            max="10"
            step="1"
            v-model="actingScore">
          </range-slider>
        </div>
      </div>
      <img class="rounded-circle mx-2" height="80px" :src="userAvatar" />
      <div class="w-50 col-sm-5">
        <b-card class="rounded">
          <!-- <b-form-input class="border-0 input"></b-form-input>
          <b-form-checkbox></b-form-checkbox> -->
        </b-card>
      </div>
    </div>
  </b-card>
</template>

<script>
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
  .fa-thumbs-up{
    color: #59ad79;
  }
  .up-vote{
    color: #59ad79;
  }
  .down-vote{
    color: red;
  }
  .fa-thumbs-down{
    color: red;
  }
  .fa-check-square{
    color: #1dc974;
  }
  .date{
    color: #bababa;
    font-size: 12px;
  }
  .recommend{
    color: #1dc974;
  }
  .input:active , .input:focus{
    outline: none;
    box-shadow: none;
  }
</style>
