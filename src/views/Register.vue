<template>
  <b-container>
    <NavBar :isNavbar="false" />
    <!-- <RegisterPage /> -->
     <div class="homePage">
    <b-row>
      <b-col md="5">
        <img  src="img/bg.png" alt="" />
      </b-col>
      <b-col md="7">
        <div class="content">
            <p> لديك حساب؟ <b-link @click="goToPage('Login')">تسجيل دخول</b-link> </p>
            <h2>انشاء حساب جديد</h2>
    
              <b-row>

              <b-col md="6">
                <div>
                   <h5> الاسم الاول   </h5>

                </div>
            </b-col>
              <b-col md="6"> <div>
                   <h5> اسم العائلة </h5>
                   
                </div></b-col>
          </b-row>
          <b-row>
              <b-col md="6">
                <div>
                    <b-form-input v-model="text"></b-form-input>

                </div>
            </b-col>
              <b-col md="6"> <div>
                    <b-form-input v-model="text1" ></b-form-input>
                   
                </div></b-col>
          </b-row>
           <h5> البريد الاكتروني </h5>
            <b-form-input v-model="email" placeholder=""></b-form-input>

            
              <b-row>

              <b-col md="6">
                <div>
                   <h5> كلمة المرور    </h5>

                </div>
            </b-col>
              <b-col md="6"> <div>
                   <h5> تاكيد كلمة المرور </h5>
                   
                </div></b-col>
          </b-row>

             <b-row>
              <b-col md="6">
                <div>
                    <b-form-input
                    type="password"
                     v-model="password" ></b-form-input>

                </div>
                
            </b-col>

              <b-col md="6"> <div>
                    <b-form-input
                    type="password"
                     v-model="password1"
                     ></b-form-input>
                   
                </div></b-col>
          </b-row>

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


  },

  methods: {
    goToPage(page) {
      this.$router.push({name: page})
    },
    onSubmit() {

    }
  },
  
    data() {
      return {
        text: '',
        text1:'',
        email:'',
        password: '',
        password1:'',
      }
    }
    
    
};

</script>

<style>
</style>