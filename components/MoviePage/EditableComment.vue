<template>
  <b-card class="m-4 text-right d-flex">
    <div class="row pr-5">
      <div class="col-sm-5">
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>کارگردانی</b></div>
          <div class="col-sm-2 blue">{{directorScore + ' از 10'}}</div>
          <!-- <b-progress :value="directorScore" :max="10" class="mt-2 progress col-sm-6 p-0" width="20px"></b-progress> -->
          <div class="col-sm-3">
          </div>
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
          <b-form-input class="border-0 input"></b-form-input>
          <b-form-checkbox></b-form-checkbox>
        </b-card>
      </div>
    </div>
  </b-card>
</template>

<script>
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
    }
  };
</script>

<style scoped>
  .slider>.dragger {
  background: #3a6ee8;
  width: 28px;
  height: 11px;
  border-radius: 7px
}

.slider>.dragger:hover {
  background: #3a6ee8
}

.slider>.track,
.slider>.highlight-track {
  background: #969696;
  height: 4px
}

.slider>.highlight-track {
  background: #3a6ee8
}

.slider {
  direction: ltr
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
