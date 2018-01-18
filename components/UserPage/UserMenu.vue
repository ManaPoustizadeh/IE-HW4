<template>
  <div class="d-flex">
    <ul class="u-ul text-right">
      <li class="horizontal u-li p-3 active">ویرایش اطلاعات کاربری</li>
      <li class="horizontal u-li p-3">تغییر رمز عبور</li>
      <li class="horizontal u-li p-3">انتقال اشتراک از سایت قدیم</li>
      <li class="horizontal u-li p-3">دعوت دوستان</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .horizontal{
    list-style: none;
    cursor: pointer;
  }
  .u-ul{
    min-width: 300px;
    border-left: 2px solid #f7f8fb;
  }
  .active{
    border-left: 2px solid blue;
    color: blue;
  }
  .u-li:hover{
    border-left: 2px solid blue;
    color: blue;
  }
</style>
