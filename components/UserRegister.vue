<template>
  <b-modal id="modal1" hide-footer="">
    <div class="text-center">
      <b-btn variant="danger">
        <i class="fa fa-google-plus ml-2" aria-hidden="true"></i>ورود با حساب کاربری گوگل
      </b-btn>
      <div class="divider">
        <span class="or">یا</span>
      </div>
    </div>
    <div>
      <b-form>
        <div class="row m-2">
          <label for="email" class="col-sm-4 mt-2 text-right">ایمیل<span class="required">*</span></label>
          <b-form-input id="email" class="col-sm-6 form-input" placeholder="ایمیل"></b-form-input>
        </div>
        <div class="row m-2">
          <label for="password" class="col-sm-4 mt-2 text-right">رمز عبور<span class="required">*</span></label>
          <b-form-input id="password" class="col-sm-6 form-input" placeholder="رمز عبور"></b-form-input>
        </div>
        <div class="row m-2">
          <label for="pass2" class="col-sm-4 mt-2 text-right">تکرار رمز عبور<span class="required">*</span></label>
          <b-form-input id="pass2" class="col-sm-6 form-input" placeholder="تکرار رمز عبور"></b-form-input>
        </div>
        <div class="row m-2">
          <label for="invitation" class="col-sm-4 mt-2 text-right">کد دعوت</label>
          <b-form-input id="invitation" class="col-sm-6 form-input" placeholder="کد دعوت (اختیاری)"></b-form-input>
        </div>
        <div class="row m-2">
          <label for="code" class="col-sm-4 mt-2 text-right">کد امنیتی<span class="required">*</span></label>
          <b-form-input id="code" class="col-sm-6 form-input" placeholder="کد امنیتی"></b-form-input>
        </div>
        <div class="text-center py-3">
          <b-form-checkbox id="checkbox1"
                      v-model="status"
                      value="accepted"
                      unchecked-value="not_accepted">
            قوانین را مطالعه کردم و می‌پذیرم
          </b-form-checkbox>
        </div>
        <div class="text-center">
          <b-btn variant="primary">عضویت</b-btn>
        </div>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
  // import '~/assets/register.css';
  export default {};

</script>

<style scoped>
  .divider{
    position: relative;
    padding: 20px 0;
    text-align: center;
}

.divider:before{
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #d4d4d4;
    top: 50%;
    left: 0;
}

.or{
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: inline-block;
    line-height: 32px;
    color: #bbb;
    position: relative;
    background: #fff;
}

.form-input{
  background-color: #f4f4f4
}

.required{
  color: red;
}
input{
  font-size: 12px;
}

</style>
