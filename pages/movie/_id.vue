<template>
<div class="text-right">
    <div>
        <div class="movie-header">
            <div class="container">
                <h3 class="movie-title">
                    {{movieData.Title}}
                </h3>
                <div class="genres">
                    <button v-for="genre in movieData.genres" 
                            :key="genre" 
                            class="btn-genre btn-sm">
                            {{genre}}
                    </button>
                </div>
            </div>
        </div>
        <div class="movie-background">
            <div class="container">
                <div class="row">
                    <div class="col-sm-2 ml-5">
                        <img class="movie-img movie-img-border" :src="movieData.Poster" />
                    </div>
                    <div class="col-sm-12 col-md-7 mr-5">
                        <button class="btn imdb-rate ml-1">
                            {{movieData.imdbRating}} از ۱۰ با {{movieData.imdbVotes}} رای
                        </button>
                        <button class="btn imdb ml-1">
                            <a :href="`http://i.iranfilm.co/title/${movieData.imdbID}/`">
                                IMDB
                            </a>
                        </button>
                        <button class="btn subtitle">Subscene</button>
                        <div class="mt-3">
                            <span class="pl-3 movie-year">
                                {{movieData.Released}}
                            </span>
                            <span class="pl-3 movie-duration">
                                {{movieData.Runtime}}
                            </span>
                            <span class="pl-3 movie-lang">
                                {{movieData.Language}}
                            </span>
                            <span class="px-2 py-2 badge badge-secondary bg-transparent" :style="{border: '1px solid white'}">
                                {{movieData.Rated}}
                            </span>
                            <span class="pl-3 pr-3 movie-country">
                                 محصول کشور {{movieData.Country}}
                            </span>
                        </div>

                        <hr class="hr"/>
                        <div class="movie-detail">
                            <h5 class="movie-title">{{movieData.TranslatedTitle}}</h5>
                            <div class="ml-5 movie-summary">{{movieData.TranslatedPlot}}</div>
                        </div>
                        <hr class="hr"/>
                        <div class="movie-cast">
                            <div class="director my-2">
                                کارگردان: {{movieData.Director}}
                            </div>
                            <div class="writer my-2">
                                نویسنده: {{movieData.Writer}}
                            </div>
                            <div class="stars my-2">
                                بازیگران: {{movieData.Actors}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-5">
        <ul class="d-flex justify-content-around center download-nav">
            <li :class="'horizontal dl-li '+activeTab.download" @click="selectTab('download')">دانلود</li>
            <li :class="'horizontal dl-li '+activeTab.sub" @click="selectTab('sub')">زیرنویس</li>
            <li :class="'horizontal dl-li '+activeTab.comments" @click="selectTab('comments')">نظر کاربران</li>
            <li :class="'horizontal dl-li '+activeTab.review" @click="selectTab('review')">نقد و بررسی</li>
            <li :class="'horizontal dl-li '+activeTab.cast" @click="selectTab('cast')">عوامل فیلم</li>
            <li :class="'horizontal dl-li '+activeTab.prize" @click="selectTab('prize')">جوایز</li>
            <li :class="'horizontal dl-li '+activeTab.gallery" @click="selectTab('gallery')">گالری</li>
        </ul>
        <download-tab v-if="activeTab.download == 'active'"
                    :downloadRate="movieData.downloadRate"
                    :totalVotes="movieData.totalVotes"
                    :positiveVotes="movieData.positiveVotes"
                    :qualities="movieData.availableDownloadQualities"
                    :resolutions="movieData.availableDownloadResolutions"  
        ></download-tab>
        <div v-if="activeTab.comments == 'active'">
            <editable-comment></editable-comment>
            <comment v-for="comment in movieData.comments"
                    :key="comment.id"
                    :directorScore="comment.directorshipScore"
                    :writingScore="comment.writingScore"
                    :actingScore="comment.actorshipScore"
                    :userName="comment.username"
                    :text="comment.text"
                    :userAvatar="comment.avatar"
                    :upVoteCount="comment.upVotesForThisComment"
                    :date="comment.date"
                    :recommend="comment.positive ? 'فیلم را پیشنهاد میکنم' : 'فیلم را پیشنهاد نمی‌کنم'"
                    :downVoteCount="comment.downVotesForThisComment"></comment>
        </div>
        <div v-if="activeTab.sub == 'active'" id="sub" class="card d-flex justify-content-center align-items-center w-100 m-2 p-5 bg-light">
            هیچ زیرنویسی موجود نیست
        </div>
        <div v-if="activeTab.review == 'active'" id="sub" class="card d-flex justify-content-center align-items-center w-100 m-2 p-5 bg-light">
            هیچ نقدی موجود نیست
        </div>
        <div v-if="activeTab.cast == 'active'" id="sub" class="card d-flex justify-content-center align-items-center w-100 m-2 p-5 bg-light">
            هیچ اطلاعاتی از بازیگران موجود نیست
        </div>
        <div v-if="activeTab.prize == 'active'" id="sub" class="card d-flex justify-content-center align-items-center w-100 m-2 p-5 bg-light">
            هیچ اطلاعاتی از جوایز موجود نیست
        </div>
        <div v-if="activeTab.gallery == 'active'" id="sub" class="card d-flex justify-content-center align-items-center w-100 m-2 p-5 bg-light">
            هیچ آیتمی در گالری موجود نیست
        </div>
    </div>
    <!-- <div> -->
  <!-- </div> -->
</div>
</template>

<script>
import Comment from '~/components/MoviePage/Comment.vue';
import EditableComment from '~/components/MoviePage/EditableComment.vue';
import DownloadTab from '~/components/MoviePage/DownloadTab.vue';

import { mapGetters } from'vuex';
export default {
    async fetch({store, params}) {
        const movieID = params.id;
        if(movieID != 'bootstrap.css.map'){
            await store.dispatch('movie/getMovieData', movieID);
            await store.dispatch('movie/getComments', movieID);
        }
    },
    methods: {
        selectTab(tabName) {
            for(var key in this.activeTab) {
                if (this.activeTab.hasOwnProperty(key)) {
                    this.activeTab[key] = '';
                }
            }
            this.activeTab[tabName] = 'active'; 
        }
    },
    data() {
        let activeTab = {
            download: 'active',
            sub: '',
            comments: '',
            review: '',
            cast: '',
            prize: '',
            gallery: '',

        }
        return {
            currentTab: 'download',
            activeTab,
        }
    },
    computed: {
        ...mapGetters({
            movieData: 'movie/movieData',
            comments: 'movie/comments',
        })
    },
    components: {
        DownloadTab,
        Comment,
        EditableComment
    }

}
</script>
<style scoped>
    .download-nav li {
        cursor: pointer;
    }

    a, a:hover, a:active {
        text-decoration: none;
        color: inherit;
    }

    .movie-header{
        background-color: #f19a27;
        padding: 30px;
        color: #ffffff;
    }

    .btn-genre{
        background-color: #e9d8d7;
        color: black;
        border: solid 2px grey;
        margin: 5px 0 5px 5px;
        border-radius: 5px;
    }

    .movie-img{
        width: 200px;
        display: inline;
        position: relative;
        top: -45px;
    }

    .movie-img-border{
        border: solid 8px #f19a27;
    }

    .movie-background{
        padding: 15px;
        background-color: black;
        color: #FFFFFF;
    }

    .imdb-rate{
        background-color: transparent;
        color: #ffffff;
        border: solid 1px white;
    }

    .imdb{
        background-color: #e4b42d;
        color: black;
    }

    .subtitle{
        background-color:#20516d;
        color: white;
    }

    .rated{
        border: solid 1px white;
        border-radius: 5px;
    }

    .hr{
        border-color: #747475;
    }
</style>
