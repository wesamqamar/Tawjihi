<template>
  <b-container>
    <NavBar :isNavbar="false" />
    <RegisterPage />
     <div class="homePage">
    <b-row>
      <b-col md="5">
        <img src="img/re.png" alt="" />
      </b-col>
      <b-col md="7">
        <div class="content">
          <h2>تسجيل دخول</h2>
            <p> مستخدم جديد؟ <b-link @click="goTopage('Login')">انشاء حساب</b-link> </p>
            
    
              
         
           <h5> البريد الاكتروني </h5>
            <b-form-input v-model="email" placeholder=""></b-form-input>

            
             

             
                <div>
                   <h5> كلمة المرور    </h5>

            
            
                   
                </div>
          

                <div>
                    <b-form-input
                    type="password"
                     v-model="password" ></b-form-input>

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
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
  },
  data(){
     return {
        form: {
          email: '',
          password: '',
          
        },
        show: true
      }
  }

   
    
  }
;

</script>

<style>
</style>