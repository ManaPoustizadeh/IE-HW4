<template>
  <div>Hello</div>
</template>

<script>

export default {

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
