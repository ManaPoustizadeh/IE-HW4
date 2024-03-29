const state = () => ({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    downloadRate: 0, //out of ten
    totalVotes: 0,
    positiveVotes: 0,
    availableDownloadLanguages: [],
    availableDownloadQualities: [],
    availableDownloadResolutions: [],
    comments: [
        {
            user: '',
            date: '',
            positive: true,
            upVotesForThisComment: 0,
            downVotesForThisComment: 0,
            directorshipScore: 0,
            actorshipScore: 0,
            writingScore: 0,
        }
    ]
});

export const mutations = {
    SET_IMDB_MOVIE_DATA (state, movieData) {
        for (const field in movieData) {
            if (movieData.hasOwnProperty(field)) {
            //   console.log(`obj.${field} = ${movieData[field]}`);
                state[field] = movieData[field];
            } 
        }
    },
    SET_LOCAL_MOVIE_DATA(state, localMovieData) {
        for (const field in localMovieData) {
            if (localMovieData.hasOwnProperty(field)) {
            //   console.log(`obj.${field} = ${movieData[field]}`);
                state[field] = localMovieData[field];
            } 
        } 
    },
    SET_MOVIE_COMMENTS(state, commentsData) {
        state.comments = commentsData;
    }
}  
const baseURL = "http://localhost:3001/movies/";
const imdbBaseUrl = "http://www.omdbapi.com/?apikey=777600ce&i=";
const translateUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180118T065453Z.8c0b1b2a3c7a2cfc.f02c1cc781f8c52581f3eab7088920efbce11522&text=";
export const actions = {
    async getMovieData({commit}, movieID) {
        const url = baseURL+movieID;
        try {
            // console.log('in get movie');
            const data = await this.$axios.$get(url);
            // console.log(data);
            commit('SET_LOCAL_MOVIE_DATA', data);
            const imdbUrl = imdbBaseUrl+data.imdbID;
            var imdbData =  await this.$axios.$get(imdbUrl);
            const TitleTranslate = await this.$axios.$get(translateUrl+imdbData.Title+"&text="+imdbData.Plot+"&lang=fa");
            imdbData.TranslatedTitle = TitleTranslate.text[0];
            imdbData.TranslatedPlot = TitleTranslate.text[1];
            // console.log(imdbData);
            commit('SET_IMDB_MOVIE_DATA', imdbData);
        } catch (error) {
            console.log(error);    
        }
    },

    async getComments({commit}, movieID) {
        const url = baseURL+movieID+'/comments';
        try {
            console.log('in get comments');
            const data = await this.$axios.$get(url);
            console.log(data);
            commit('SET_MOVIE_COMMENTS', data);
        } catch (error) {
            console.log(error);
        }
    }

    // async commentUpvote({commit}, movieID, commentID, newComment) {
    //     const url = baseURL+movieID+'/comments'
    // }
    
}

export const getters = {
    movieData(state) {
        return state;
    },

    comments(state) {
        return state.comments;
    }
}
