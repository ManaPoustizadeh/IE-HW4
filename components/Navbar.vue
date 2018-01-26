<template>
  <b-navbar toggleable="md" type="light" variant="transparent">
    <div class="container header">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-btn v-b-modal.loginModal variant="outline-primary">
        ورود/عضویت
      </b-btn>
      <user-login></user-login>
      <b-button class="rounded-circle border-0 gas mr-2 bg-transparent">
        <i class="fa fa-bell" aria-hidden="true"></i>
      </b-button>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">

          <!-- <b-nav-form>
                <b-form-input class="mr-sm-2 search" type="text" placeholder="جستجوی فیلم و سریال و کارگردان">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </b-form-input>
            </b-nav-form> -->

          <div class="inner-addon left-addon">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input class="mr-sm-2 search form-control border-0" type="text" placeholder="جستجوی فیلم و سریال و کارگردان" />
          </div>

        </b-navbar-nav>

      </b-collapse>
    </div>
  </b-navbar>


</template>

<script>
  import UserLogin from '~/components/UserLogin';
  export default {
    components: {
      UserLogin,
    }
  };

</script>

<style scoped>
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
