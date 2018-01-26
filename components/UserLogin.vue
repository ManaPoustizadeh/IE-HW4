<template>
  <b-modal id="loginModal" hide-footer>
        <div class="d-flex w-100 justify-content-center">
            <div id="loginTabButton" 
                 @click="() => activeTab='login'" 
                 :class="activeTab=='login' ? 'active ' : ''"
                 class="w-50 align-items-center tabs p-3 d-flex justify-content-center rounded-0 border-0">
                <i class="fa fa-key ml-2"></i>
                <span>ورود</span>
            </div>
            <div id="registerTabButton" 
                 @click="() => activeTab='register'" 
                 :class="activeTab=='register' ? 'active ' : ''"
                 class="w-50 align-items-center p-3 d-flex justify-content-center tabs rounded-0 border-0">
                <i class="fa fa-user ml-2"></i>
                <span>عضویت</span>
            </div>
        </div>
        <div v-if="activeTab=='login'" class="container my-3 p-5 login-tab">
            <div class="w-100 justify-content-center text-center">
                <b-btn variant="danger">
                    <i class="fa fa-google-plus ml-2" aria-hidden="true"></i>ورود با حساب کاربری گوگل
                </b-btn>
            </div>
            <div class="divider">
                <span class="or">یا</span>
            </div>
            <b-input v-model="username" placeholder="نام کاربری" :state="usernameValid" class="p-2 w-100"></b-input>
            <b-input v-model="password" placeholder="رمز عبور" type="password" :state="usernameValid" class="p-2 w-100 mt-3"></b-input>
            <b-form-checkbox id="checkbox1"
                            v-model="remember"
                            :value="true"
                            class="mt-3 right"
                            :unchecked-value="false">
            مرا به خاطر بسپار
            </b-form-checkbox>
            <div class="w-100 text-center justify-content-center d-flex align-items-center">
                <b-button :disabled="!usernameValid || !passwordValid" variant="success" class="mt-4 px-5">ورود</b-button>
            </div>
        </div>
        <div v-else class="container p-5">
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
                <b-form-input v-model="email" id="email" :state="emailValid" class="form-input p-2" placeholder="ایمیل خود را وارد کنید."></b-form-input>
                <b-form-input v-model="password" id="password" :state="passwordValid" class="form-input p-2 mt-3" placeholder="رمز عبور"></b-form-input>
                <b-form-input v-model="passwordConfirmation" :state="passwordConfirm" id="pass2" class="form-input p-2 mt-3" placeholder="تکرار رمز عبور"></b-form-input>
                <b-form-input v-model="invitationCode" id="invitation" class="form-input p-2 mt-3" placeholder="کد دعوت (اختیاری)"></b-form-input>
                <div class="text-center py-3">
                <b-form-checkbox id="checkbox2"
                            v-model="acceptedRules"
                            :value="true"
                            :unchecked-value="false">
                    قوانین را مطالعه کردم و می‌پذیرم
                </b-form-checkbox>
                </div>
                <div class="text-center">
                <b-btn id="registerButton" :disabled="!emailValid || !passwordConfirm || !passwordValid || !acceptedRules" variant="primary">عضویت</b-btn>
                </div>
            </b-form>
            </div>
        </div>
  </b-modal>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            invitationCode: '',
            number: '',
            remember: false,
            acceptedRules: false,
            activeTab: 'login',
        }
    }, 
    methods: {
         async login() {
            try {
                let fields = { username: this.username, password: this.password };
                let { token } = (await this.$axios.post("auth/login", fields)).data;

                this.$store.commit('auth/SET_TOKEN', token);
                this.$store.dispatch('auth/FETCH', this);
                this.$success('ورود موفقیت آمیز');
                this.$router.push('/user');
                this.$root.$loading.finish();
            } catch (e) {
                console.log(e);
                this.$error('خطا هنگام ورود!');
            }
        },
        async register() {
            try {
                let registerFields = {
                    username: this.username, 
                    password: this.password,
                    email: this.email,
                }
                await this.$axios.post('register', registerFields);
                let fields = { username: this.username, password: this.password };
                let { token } = (await this.$axios.post("auth/login", fields)).data;

                this.$store.commit('auth/SET_TOKEN', token);

                this.$success('ثبت نام با موفقیت انجام شد')
                this.$router.push('/user');
            } catch (error) {
                this.$error('خطا در هنگام ثبت نام')
                console.log('Problem registering')
            }
        },
    },
    computed: {
        emailValid() {
            let email = this.email;
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validation =  re.test(email.toLowerCase());
            if(email == null || email == '')
                return null;
            else if(validation)
                return true;
            else 
                return false;
        },
        passwordValid() {
            let password = this.password;
            if(password == null || password == '')
                return null;
            else if(password.length > 3)
                return true;
            else 
                return false;
        },
        passwordConfirm() {
            let password = this.password;
            if(password == null || password == '')
                return null;
            else if(password == this.passwordConfirmation)
                return true;
            else 
                return false;
        },
        usernameValid() {
            let username = this.username;
            if(username == null || username == '')
                return null;
            else if (username.length > 3)
                return true;
            else 
                return false;
        }

    }
}
</script>

<style>
    #registerButton {
        transition: 0.5s ease;
    }

    .login-tab {
        background: #fafafa;
    }

    .modal-body {
        background: #fafafa;
        padding: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .modal-header {
        background: rgb(204, 204, 204);
        padding-top: 7px;
        padding-bottom: 5px;
        color: whitesmoke;
        border-bottom: 0;
    }

    .close {
        color: white;
    }

    .tabs {
        background: rgb(238, 238, 238);
        color: #666;
        cursor: pointer;
    }
    .active {
        background: #fafafa;
        color: #666;
    }

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
