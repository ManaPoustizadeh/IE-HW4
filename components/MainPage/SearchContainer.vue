<template>
    <!-- This is the overview of the structure -->
    <div class="container search-container row text-center w-100 justify-content-center align-items-center bg-danger">   
        <!-- give it the needed props and stuff -->
        <div class="text-center">
            <h3 class="w-100 mb-1">
                {{title}}
            </h3>
            <div class="d-flex w-100 mb-2">
                <!-- and here are your buttons -->
                <b-button class="rounded-circle border-0 gas mr-2 text-white">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </b-button>
                <b-button class="rounded-circle border-0 gas mr-2 text-white">
                    <i class="fa fa-search-plus" aria-hidden="true"></i>
                </b-button>
                <search-input searchInput="جستجوی فلان بیسار"></search-input>
            </div>

            <!-- and heres the main search button -->
            <b-button class="border-0 p-2 bg-warning pull-left">
                جستجو
            </b-button>
        </div>

    </div>
</template>

<script>
import SearchInput from '~/components/MainPage/SearchInput.vue';

export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
        },
        //add any other props u think u need
    },

    components: {
        SearchInput,
    }
}
</script>

<style scoped>
    .search-container {
        height: 400px;
    }
</style>
