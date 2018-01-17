<template>
  <div>
    <Navbar></Navbar> 
    <under-nav></under-nav>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import UnderNav from '~/components/UnderNav.vue';

export default {
  components: {
    Navbar,
    UnderNav,
  }
}
</script>

<style>
@font-face {
    font-family: "shabnam";
    src: url("~/assets/farsifont/Shabnam-FD.ttf") format("truetype");
    src:
            url("~/assets/farsifont/Shabnam-FD.woff") format("woff");
}

@font-face {
    font-family: "IRANYekanWeb";
    src: url("~/assets/farsifont/IRANYekanWeb.ttf") format("truetype");
}

@font-face {
    font-family: "IRANYekanWebLight";
    src: url("~/assets/farsifont/IRANYekanWebLight.ttf") format("truetype");
}

html {
  font-family: "IRANYekanWeb", "shabnam";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: "IRANYekanWeb", "shabnam";
  direction: rtl;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
