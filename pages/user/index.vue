<template>
  <div class="container">
    <user-tab></user-tab>
    <div class="d-flex text-right">
      <user-menu></user-menu>
      <div class="p-2 pr-4 mb-4">
        <div>
          <div class="u-title p-2">شماره همراه</div>
        </div>
        <b-form-input v-model="phoneNumber" class="input mt-2"></b-form-input>
        <b-button class="form-button mt-3">ذخیره شماره تماس</b-button>
        <div>
          <div class="u-title p-2 pt-4">ویرایش اطلاعات کاربری</div>
        </div>
        <div>
          <label>نام</label>
          <b-form-input v-model="username" class="input mb-2"></b-form-input>
          <label>نام خانوادگی</label>
          <b-form-input v-model="lastName" class="input mb-2"></b-form-input>
          <label>نام مستعار</label>
          <b-form-input v-model="nickName" class="input mb-2"></b-form-input>
          <label>ایمیل (نام کاربری)</label>
          <b-form-input v-model="email" class="input mb-2"></b-form-input>
        </div>
        <b-button @click="submit" class="form-button mt-3">به روزرسانی</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  import UserTab from '~/components/UserPage/UserTab.vue';
  import UserMenu from '~/components/UserPage/UserMenu.vue';
  import { mapGetters } from'vuex';
  export default {
    middleware: ['auth'],

     async fetch({store, params}) {
        // const userID = 1; //for now
        // await store.dispatch('user/getUserData', userID);
        // this.email = this.user.email;
    },
    data() {
      return {
        email: this.$store.state.user.user.email,
        username: this.$store.state.user.user.username,
        lastName: this.$store.state.user.user.lastName,
        phoneNumber: this.$store.state.user.user.phoneNumber,
        nickName: this.$store.state.user.user.nickName,
      }
    },
    methods: {
      async submit() {
        let url = '/user/update';
        try {
          let result = await this.$axios.post(url, {
            email: this.email, 
            username: this.username, 
            lastname: this.lastName,
            phoneNumber: this.phoneNumber, 
            nickName: this.nickName,
            id: this.user._id,
          });
          this.$router.go('/user');
        } catch (error) {
          console.log(error);
        }
      }
    },
    components:{
        UserTab,
        UserMenu
    }, 
    computed: {
      ...mapGetters({
        user: 'user/user',
      })
    }
  }
</script>

<style scoped>
  .u-title{
    color: #bababa;
    /*border-bottom: solid 1px #bababa;*/
  }
  .input{
    background-color: #f7f8fb;
    min-width: 300px;
  }
  .div-border{
    border-bottom: solid 1px #f4f4f4;
  }
  .form-button{
    font-size: 12px;
    background-color: #5cc37d;
    border: none;
  }
  label{
    font-size: 14px;
    color: #bababa;
  }
</style>

