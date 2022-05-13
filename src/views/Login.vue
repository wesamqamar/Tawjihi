<template>
  <b-container>
    <NavBar :isNavbar="false" />
    <div class="homePage">
      <b-row>
        <b-col md="5">
          <img src="img/re.png" alt="" />
        </b-col>
        <b-col md="7">
          <div class="content">
            <h2>تسجيل دخول</h2>
            <p>
              مستخدم جديد؟
              <b-link @click="goTopage('Login')">انشاء حساب</b-link>
            </p>

            <h5>البريد الاكتروني</h5>
            <b-form-input
              class="customInputStyle"
              v-model="form.email"
              placeholder=""
            ></b-form-input>

            <div class="mt-4">
              <h5>كلمة المرور</h5>
            </div>

            <div>
              <b-form-input
                class="customInputStyle"
                type="password"
                v-model="form.password"
              ></b-form-input>
            </div>

            <div class="actionsBtn">
              <b-button pill class="exploreBtn"> التالي </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue"),
    LoginPage: () => import("./components/login/LoginPage.vue"),
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
};
</script>

<style>
.customInputStyle,
.customInputStyle:focus {
  background: none;
  border: 0;
  border-bottom: 3px solid #20577a;
  bottom: 5px;
  box-shadow: unset !important;
  border-radius: 0;
}

/* Change the white to any color */
.customInputStyle:-webkit-autofill,
.customInputStyle:-webkit-autofill:hover, 
.customInputStyle:-webkit-autofill:focus, 
.customInputStyle:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #E6E6E6 inset !important;
      border: 0;
  border-bottom: 3px solid #20577a;
  background: none !important;

}
</style>