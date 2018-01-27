<template>
  <b-navbar toggleable="md" type="light" variant="transparent">
    <div class="container header">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-btn v-if="!$store.state.user.loggedIn" v-b-modal.loginModal variant="outline-primary">
        ورود/عضویت
      </b-btn>
      <b-dropdown variant="link" size="lg" offset="-110" no-caret v-else>
        <template slot="button-content">
          <img class="rounded-circle userAvatar" :src="$store.state.user.user.avatar" width="35px" height="35px" />
        </template>
        <b-dropdown-header class="text-right">
          <span>خوش‌آمدید {{$store.state.user.user.username}}</span>
        </b-dropdown-header>
        <hr>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          تنظیمات
        </b-dropdown-item>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          سبد دانلود
        </b-dropdown-item>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          فیلم‌های مورد علاقه
        </b-dropdown-item>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          پشتیبانی
        </b-dropdown-item>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          اشتراک ویژه
        </b-dropdown-item>
        <b-dropdown-item active-class="hi" class="text-right" to="/user">
          دعوت دوستان
        </b-dropdown-item>
        <hr>
        <b-dropdown-item @click="logout" active-class="hi" class="text-right">
           خروج
        </b-dropdown-item>
      </b-dropdown>
      <user-login></user-login>
      <b-button class="rounded-circle border-0 gas mr-2 bg-transparent">
        <i class="fa fa-bell" aria-hidden="true"></i>
      </b-button>

      
      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <b-navbar-brand to="/" class="bg-transparent ml-3">AMDB</b-navbar-brand>
          <div class="inner-addon left-addon">
            <i @click="search" class="fa fa-search search-icon" aria-hidden="true"></i>
            <input @keypress.enter="search" v-model="searchQuery" class="mr-sm-2 search form-control border-0" type="text" placeholder="جستجوی فیلم و سریال و کارگردان" />
          </div>

        </b-navbar-nav>

      </b-collapse>
    </div>
  </b-navbar>


</template>

<script>

  import UserLogin from '~/components/UserLogin';
  export default {
    data() {
      return {
        searchQuery: '',
      }
    },
    components: {
      UserLogin,
    },
    methods: {
      logout() {
        try {
          this.$store.dispatch('user/logout', this);
          this.$router.push('/');
        } catch (error) {
          console.log('error');
        }
      },

      search() {
          this.$store.dispatch('movie/search', this.searchQuery);
          this.$router.push(`/search/${this.searchQuery}`);
      }
    }
  };

</script>

<style scoped>
  .hi {
    background: transparent;
    color: #7e7e7e;
    box-shadow: none;
    border: 0;
    outline: 0;
  };

  a:hover {
    background: gray;
  }

  .search-icon {
    cursor: pointer;
  }

  .userAvatar { 
    border: 1px solid red;
    cursor: pointer;
  }

  .search {
    color: #9c9c9c;
    background-color: #f4f4f4;
    min-width: 300px;
    transition: 0.5s ease;
  }

  .form-control:focus, .form-control:hover {
      box-shadow: none;
      outline: none;
  }

  .search:hover {
      background: #eeeeee
  }

  .fa-search {
      color: #9c9c9c;
  }

  .gas {
    color: #9c9c9c;
    font-size: 22px;
  }

  .inner-addon { 
    position: relative; 
}

/* style icon */
.inner-addon .fa {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

/* align icon */
.left-addon .fa  { left:  0px;}
.right-addon .fa { right: 0px;}

/* add padding  */
.left-addon input  { padding-left:  30px; }
.right-addon input { padding-right: 30px; }

</style>
