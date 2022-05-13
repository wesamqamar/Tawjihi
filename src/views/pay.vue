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
            <h2  class="px-3 py-2" >طريقة الدفع
</h2>
  
    <h5> رقم البطاقة </h5>
         
            <b-form-input v-model="email" ></b-form-input>
             <b-row>

                <b-col md="6">
                  <div>
                    <h5> تاريخ انتهاء الصلاحية   </h5>

                  </div>
              </b-col>
                <b-col md="6"> <div>
                    <h5> رمز البطاقة </h5>
                    
                  </div></b-col>
             </b-row>
          <b-row>

              <b-col md="6">
                <div>
                    <b-form-input v-model="text" ></b-form-input>

                </div>
            </b-col>
              <b-col md="6"> <div>
                    <b-form-input v-model="text1"></b-form-input>
                </div></b-col>
          </b-row>
           
            <b-row>

              <b-col md="6">
                <div>
                   <h5> الاسم الاول   </h5>

                </div>
            </b-col>
              <b-col md="6"> <div>
                   <h5> الاسم الاخير </h5>
                   
                </div></b-col>
          </b-row>
           <b-row>


              <b-col md="6">
                <div>
                    <b-form-input v-model="text"></b-form-input>

                </div>
            </b-col>
              <b-col md="6"> <div>
                    <b-form-input v-model="text1"></b-form-input>
                   
                </div></b-col>
          </b-row>
          

          <div class="actionsBtn">
            
            <b-button pill class="exploreBtn"> ادفع الان </b-button>

            
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