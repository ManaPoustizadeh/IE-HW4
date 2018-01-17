<template>
<b-card class="w-100 d-flex">
    <div class="w-25">
        <div class="row">
            کارگردانی 
            <b-progress :value="directorScore" :max="10" class="mb-3"></b-progress>
        </div>
    </div>
    <img class="rounded-circle mx-2" height="120px" :src="userAvatar" />
    <div class="w-50">
        <b-card class="w-100 rounded">
            <!-- other things here -->
        </b-card>
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
    }
};
</script>

<style>

</style>
