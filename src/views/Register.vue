<template>
  <b-container>
    <NavBar :isNavbar="false" />
    <!-- <RegisterPage /> -->
    <div class="homePage">
      <b-container>
        <b-row>
          <b-col md="7">
            <div class="content2">
              <p>
                لديك حساب؟
                <b-link @click="goToPage('Login')">تسجيل دخول</b-link>
              </p>
              <h2>انشاء حساب جديد</h2>

              <b-row>

                <b-col md="6">
                  <div>
                    <label>الاسم الأول</label>
                    <b-form-input
                      class="customInputStyle"
                      v-model="inputs.first_name"
                    ></b-form-input>
                  </div>
                </b-col>

                <b-col md="6">
                  <div>
                    <label>اسم العائلة</label>
                    <b-form-input
                      class="customInputStyle"
                      v-model="inputs.last_name"
                    ></b-form-input>
                  </div>
                </b-col>

                <b-col md="12">
                  <div class="mt-1">
                    <label>البريد الإلكتروني</label>
                    <b-form-input
                      class="customInputStyle"
                      v-model="inputs.email"
                    ></b-form-input>
                  </div>
                </b-col>

                <b-col md="6">
                  <div >
                    <label>كلمة المرور</label>
                    <b-form-input
                      type="password"
                      class="customInputStyle"
                      v-model="inputs.password"
                    ></b-form-input>
                  </div>
                </b-col>

                <b-col md="6">
                  <div>
                    <label>تأكيد المرور</label>
                    <b-form-input
                      type="password"
                      class="customInputStyle"
                      v-model="inputs.confirm_password"
                    ></b-form-input>
                  </div>
                </b-col>
                
                

              <b-col md="12">
                <p class="my-3">استخدم 8 أحرف أو أكثر باستعمال مزيج من الأحرف والأرقام والرموز</p>
                 <div class="actionsBtn my-3">
              <b-button @click="goToPage('pay')" style="float:left;" pill class="exploreBtn"> التالي </b-button>
            </div>
              </b-col>            
              </b-row>
            </div>
          </b-col>

          <b-col md="5">
            <img style="position: relative; right: 0" src="img/bg.png" alt="" />
          </b-col>
        </b-row>
      </b-container>
     
    </div>
  </b-container>
</template>

<script>
export default {
  components: {
    NavBar: () => import("./components/NavBar.vue"),
  },

  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    },
    onSubmit() {},
  },

  data() {
    return {
      inputs: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        confirm_password: null,
      },
    };
  },
};
</script>

<style>
</style>