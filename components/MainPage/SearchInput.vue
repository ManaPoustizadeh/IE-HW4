<template>
    <div class="w-100">
        <b-input class="w-100" :placeholder="searchInput"></b-input>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: {
        searchInput: {
            type: String,
        }
    }
}
</script>

<style>

</style>
