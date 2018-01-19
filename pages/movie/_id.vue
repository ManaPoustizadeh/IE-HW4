<template>
  <div>
    <comment :directorScore="4"
             :writingScore="7"
             :actingScore="8"
             :userName="'manaaa'"
             :text="'انیمیشن خوبی بود انیمیشن خوبی بود انیمیشن خوبی بود انیمیشن خوبی بود انیمیشن خوبی بود انیمیشن خوبی بود انیمیشن خوبی بود '"
             :upVoteCount="31"
             :date="'7 تیر سال فلان'"
             :recommend="'فیلم را پیشنهاد میکنم'"
             :downVoteCount="1"></comment>
    <editable-comment></editable-comment>
  </div>
</template>

<script>
import Comment from '~/components/MoviePage/Comment.vue';
import EditableComment from '~/components/MoviePage/EditableComment.vue';
export default {
  data() {
    return {

    }
  },
  components:{
      Comment,
      EditableComment
  }
}
</script>
    data() {
        return {
            title: '',
            rating: 0,
            genres: [],
            year: '',
            voteCount: 200,
            length: '',
            languages: [],
            countries: [],
            summary: '',
            directors: [],
            writers: [],
            stars: [],
            downloadRate: 8, //out of ten
            totalVotes: 10,
            positiveVotes: 5,
            availableDownloadLanguages: [],
            availableDownloadQualities: [],
            availableDownloadResolutions: [],
            comments: [
                {
                    user: '',
                    date: '',
                    positive: true,
                    upVotesForThisComment: 10,
                    downVotesForThisComment: 20,
                    directorshipScore: 8,
                    actorshipScore: 5,
                    writingScore: 10,
                }
            ]
        }
    }
<style>

</style>
