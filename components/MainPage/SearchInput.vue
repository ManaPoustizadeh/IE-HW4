<template>
    <div class="w-100">
        <b-input class="w-100 ph-font" :placeholder="searchInput"></b-input>
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

<style scoped>
  .ph-font{
    font-size: 12px;
  }
</style>
