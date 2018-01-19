<template>
<b-card class="m-4 text-right d-flex">
  <div class="row pr-5">
    <div class="col-sm-5">
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>کارگردانی</b></div>
          <div class="col-sm-3 blue">{{directorScore + ' از 10'}}</div>
          <b-progress :value="directorScore" :max="10" class="mt-2 progress col-sm-6 p-0" width="20px"></b-progress>
        </div>
        <div class="row text-right mb-4">
          <div class="col-sm-3 blue"><b>بازیگری</b></div>
          <div class="col-sm-3 blue">{{writingScore + ' از 10'}}</div>
          <b-progress :value="writingScore" :max="10" class="mt-2 progress col-sm-6 p-0"></b-progress>
        </div>
        <div class="row text-right ">
          <div class="col-sm-3 blue"><b>فیلمنامه</b></div>
          <div class="col-sm-3 blue">{{actingScore + ' از 10'}}</div>
          <b-progress :value="actingScore" :max="10" class="mt-2 progress col-sm-6 p-0"></b-progress>
        </div>
    </div>
    <img class="rounded-circle" height="80px" :src="userAvatar" />
    <div class="w-50 col-sm-6">
        <b-card class="rounded">
          <div class="d-flex align-items-center mb-2">
            <span class="date">{{date}}</span>
            <span class="mr-auto text-left">
              <span class="recommend">{{recommend}}</span>
              <i class="fa fa-check-square mr-2" aria-hidden="true"></i>
            </span>
          </div>
            <p>{{text}}</p>
          <span class="up-vote">{{upVoteCount}}</span>
          <i class="fa fa-thumbs-up ml-3" aria-hidden="true"></i>
          <span class="down-vote">{{downVoteCount}}</span>
          <i class="fa fa-thumbs-down ml-3" aria-hidden="true"></i>
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
</style>
