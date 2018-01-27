<template>
    <div class="col-8 p-0">
        <b-form-input class="w-100 ph-font" @keypress.enter.native="enter"  v-model="query" @input="input" :placeholder="searchInput"></b-form-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
        }
    },

    methods: {
        input(e) {
            this.$emit('input', this.query);
        },
        enter() {
            console.log('hihihi');
            this.$emit('enter', this.query);
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
