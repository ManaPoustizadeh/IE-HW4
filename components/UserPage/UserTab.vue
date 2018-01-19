<template>
  <div class="container">
    <ul class="w-100 center user-nav d-flex justify-content-around">
      <li class="horizontal text-center active col-sm-2 p-3 u-li">تنظیمات</li>
      <li class="horizontal text-center col-sm-2 p-3 u-li">خرید اشتراک</li>
      <li class="horizontal text-center col-sm-2 p-3 u-li">سبد دانلود</li>
      <li class="horizontal text-center col-sm-2 p-3 u-li">فیلم‌های مورد علاقه</li>
      <li class="horizontal text-center col-sm-2 p-3 u-li">تیکت</li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .user-nav{
    border-bottom: 1px solid #bbbbbb;
  }
  .active{
    border-bottom: 2px solid #000;
  }
  .horizontal{
    display: inline;
    cursor: pointer;
  }
  .u-li:hover{
    border-bottom: 2px solid #000;
  }
</style>
