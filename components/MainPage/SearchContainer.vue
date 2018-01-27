<template>
    <!-- This is the overview of the structure -->
    <div class="container search-container row text-center w-100 justify-content-center align-items-center bg-danger" :style="{background: `url(${img})`}">
        <div class="container-background"></div>
        <!-- give it the needed props and stuff -->
        <div class="text-center row justify-content-end justify-content-md-center">
            <span class="input-title w-100 col-12">
                {{title}}
            </span>
            <div class="row w-100 mr-auto mb-2 mt-1 main-center">
                <b-button class="rounded-circle border-0 gas ml-2 text-white form-button">
                    <i class="fa fa-search-plus" aria-hidden="true"></i>
                </b-button>
                <b-button class="rounded-circle border-0 gas ml-2 text-white zoom-button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </b-button>
                <search-input @input="changeSearchQuery" @enter="search" searchInput="جستجوی فلان بیسار"></search-input>
            </div>
            <!-- and heres the main search button -->
            <b-button @click="search(searchQuery)" class="border-0 p-1 pl-5 pr-5 bg-warning pull-left">جستجو</b-button>
        </div>
    </div>
</template>

<script>
import SearchInput from '~/components/MainPage/SearchInput.vue';
import Footer from '~/components/Footer.vue';

export default {
    data() {
        return {
            searchQuery: '',
        }
    },
    props: {
      title: {
          type: String,
      },
      img: {
        type: String,
      }
    },

    methods: {
        changeSearchQuery(query) {
          this.searchQuery = query;
        },
        search(query) {
          this.$store.dispatch('movie/search', query);
          this.$router.push(`/search/${query}`);
        }
    },

    components: {
        SearchInput,
    }
}
</script>

<style scoped>
    .container-background {
        background: black; 
        position: absolute;
        height: 400px;
        width: 100%;
        z-index: -2;
        left: 0;
    }

  .search-container {
    height: 400px;
  }

  .zoom-button{
    background-color: #584a7b;
  }

  .form-button{
    background-color: #59ad79;
  }

  .form-button:hover .zoom-button:hover{
    opacity: 70;
  }

  /* .main-center{ */
    /* min-width: 500px; */
  /* } */
  .input-title{
    color: white;
  }

</style>
