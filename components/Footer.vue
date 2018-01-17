<template>
  <div class="footer p-2">
    <div class="container footer-container pr-5 pl-5 mr-auto ml-auto">
      <ul class="footer-links">
        <li class="footer-link m-2">درخواست فیلم</li>
        <li class="footer-link m-2">اشتراک ویژه</li>
        <li class="footer-link m-2">نرم افزارهای مورد نیاز</li>
        <li class="footer-link m-2">پرسش متداول</li>
        <li class="footer-link m-2">درباره ما</li>
        <li class="footer-link m-2">تماس با ما</li>
      </ul>
      <div class="row">
        <div class="footer-banner col-sm-3 p-3 mb-2">محتوای این سایت مطابق با فرهنگ خانواده‌های ایرانی می‌باشد.</div>
        <div class="col-sm-7">
          <p class="footer-desc pr-3">
            مجموعه‌ی دیتابیس فیلم امیرکبیر، با هدف ایجاد یک تجربه‌ی مشترک آموزشی و تفریحی برای دانشجویان دانشگاه صنعتی امیرکبیر ایجاد شده و هیچ‌گونه استفاده‌ی تجاری ندارد. در صورتیکه از این سایت و امکانات آن لذت می‌برید آن را به دوستان خود هم معرفی کنید.
          </p>
        </div>
      </div>
      <div class="row">
        <img src="../assets/img/google.png" class="footer-logo m-1"/>
        <img src="../assets/img/Telegram.png" class="footer-logo m-1"/>
        <img src="../assets/img/instagram.png" class="footer-logo m-1 rounded-circle"/>
        <img src="../assets/img/twitter.png" class="footer-logo m-1"/>
      </div>
    </div>
    <hr class="footer-end"/>
    <p class="copyright">تمامی حقوق این وب‌سایت متعلق به دیتابیس فیلم امیرکبیر می‌باشد.</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    props: {

    }
  }
</script>

<style scoped>

  .footer{
    background-color: #fafafa;
  }
  .footer-container{
    text-align: center;
  }

  .footer-links{
    color: #616161;
  }

  .footer-link:hover{
    color: #3a6ee8;
  }

  .footer-link{
    display: inline;
  }

  .footer-links li:not(:first-child):before {
    content: " | ";
  }

  .footer-banner{
    border: solid 2px #999;
    border-radius: 7px;
    color: #616161;
    font-weight: 600;
    font-size: 20px;
  }

  .footer-desc{
    text-align: justify;
  }

  .footer-logo{
    margin: 5px;
    width: 57px;
    height: 57px;
    filter: grayscale(100%);
  }

  .footer-logo:hover{
    filter: grayscale(0%);
  }

  .instagram{
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #8e8e8e;
    color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    top: 5px;
    width: 50px;
    height: 50px;
  }

  .footer-end{
    border-bottom: none;
    border-top: solid 1px #3a6ee8;
  }

  .copyright{
    color: #3a6ee8;
    font-size: 12px;
    text-align: center;
  }
</style>
