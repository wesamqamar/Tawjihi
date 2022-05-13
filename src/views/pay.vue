<template>
  <b-container>
    <NavBar :isNavbar="false" />
    <!-- <RegisterPage /> -->
    <div class="homePage">
      <b-row>
        <b-col md="5">
          <img src="img/pay.png" alt="" />
        </b-col>

        <b-col md="7">
          <div class="content">
            <h2 class="px-3 py-2">طريقة الدفع</h2>
            
            <b-row>
              <b-col md="12">
                <label style="position:relative;top:10px;">رقم البطاقة</label>
                <b-form-input class="customInputStyle" v-model="inputs.card_number"></b-form-input>
                <img style="width:40px;height:40px;float:left;position:relative;bottom:50px;left:10px" src="/img/visa.png" alt="">
              </b-col>

               <b-col md="6">
                <label>تاريخ انتهاء الصلاحية</label>
                <b-form-datepicker placeholder="" class="customInputStyle" v-model="inputs.expired_date"></b-form-datepicker>
              </b-col>

              <b-col md="6">
                <label>رمز البطاقة</label>
                <b-form-input class="customInputStyle" v-model="inputs.card_code"></b-form-input>
              </b-col>

               <b-col md="6">
                <label>الاسم الأول</label>
                <b-form-input class="customInputStyle" v-model="inputs.first_name"></b-form-input>
              </b-col>

              <b-col md="6">
                <label>الاسم الأخير</label>
                <b-form-input class="customInputStyle" v-model="inputs.last_name"></b-form-input>
              </b-col>


            </b-row>
    
            <div class="actionsBtn">
              <b-button pill class="exploreBtn" v-b-modal.payModal>
                ادفع الان
              </b-button>
              <b-modal
                id="payModal"
                size="md"
                :hide-footer="true"
                :hide-header="true"
              >
                <div class="text-center">
                  <img
                    style="position: relative; bottom: 70px"
                    width="100px "
                    height="100px"
                    src="img/mp.png"
                    alt=""
                  />
                </div>
                <div
                  class="text-center"
                  style="position: relative; bottom: 60px"
                >
                  <h2>مرحبا بك !</h2>

                  <p>يمكنك البدء بعملية الدفع على الفور</p>

                  <div>
                    <p>
                      <img
                        style="position: relative; left: 20px"
                        width="40"
                        height="40"
                        src="img/g2.png"
                        alt=""
                      />
                      <span
                        style="
                          display: inline-block;
                          position: relative;
                          left: 10px;
                        "
                        >ابدأ بحسابك الشخصي</span
                      >
                    </p>

                    <p>
                      <img
                        style="position: relative; left: 55px"
                        width="40"
                        height="40"
                        src="img/g3.png"
                        alt=""
                      />
                      <span
                        style="
                          display: inline-block;
                          position: relative;
                          left: 43px;
                        "
                        >طرق الدفع</span
                      >
                    </p>

                    <p>
                      <img
                        style="position: relative; left: 43px"
                        width="40"
                        height="40"
                        src="img/g2.png"
                        alt=""
                      />
                      <span
                        style="
                          display: inline-block;
                          position: relative;
                          left: 30px;
                        "
                        >ملفك الشخصي</span
                      >
                    </p>

                    <div>
                      <b-button
                        style="
                          float: left;
                          margin-bottom: -50px;
                          margin-left: 40px;
                          width: auto;
                          min-width: 140px;
                          background: #20577a;
                          border: 1px solid #20577a;
                        "
                        pill
                      >
                        استكشف الآن
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-modal>
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
    // RegisterPage: () => import("./components/home/pay.vue"),
  },
  data() {
    return {
      inputs: {
        card_number: null,
        expired_date: null,
        card_code: null,
        first_name: null,
        last_name: null,
      },
      text: "",
      text1: "",
      email: "",
      password: "",
      password1: "",
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style>
.modal-content {
  border-radius: 5.3rem;
  position: relative;
  top: 100px;
}
</style>