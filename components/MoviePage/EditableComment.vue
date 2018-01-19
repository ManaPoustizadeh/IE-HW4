<template>
  <b-card class="m-4 text-right d-flex">
    <div class="row pr-5">
      <div class="col-sm-5">
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>کارگردانی</b></div>
          <div class="col-sm-2 blue">{{directorScore + ' از 10'}}</div>
          <!-- <input type="range" :value="directorScore" :max="10" class="mt-2 progress col-sm-6 p-0" width="20px"> -->
        </div>
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>بازیگری</b></div>
          <div class="col-sm-2 blue">{{writingScore + ' از 10'}}</div>
          <b-progress :value="writingScore" :max="10" class="mt-2 progress col-sm-6 p-0"></b-progress>
        </div>
        <div class="row text-right ">
          <div class="col-sm-3 blue"><b>فیلمنامه</b></div>
          <div class="col-sm-2 blue">{{actingScore + ' از 10'}}</div>
          <b-progress :value="actingScore" :max="10" class="mt-2 progress col-sm-6 p-0"></b-progress>
        </div>
      </div>
      <!--<img class="rounded-circle mx-2" height="120px" :src="userAvatar" />-->
      <div class="w-50 col-sm-6">
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
  export default {
    props: {
      directorScore: {
        type: Number,
      },
      writingScore: {
        type: Number,
      },
      actingScore: {
        type: Number,
      },
      userAvatar: {
        type: String,
      },
      userName: {
        type: String,
      },
      date: {
        type: String,
      },
      text: {
        type: String,
      },
      upVoteCount: {
        type: Number,
      },
      downVoteCount: {
        type: Number,
      },
      recommend: {
        type: String
      }
    },
  };
</script>

<style scoped>
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
