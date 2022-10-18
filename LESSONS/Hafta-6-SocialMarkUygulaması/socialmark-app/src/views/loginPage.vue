<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'registerPage' }" class="text-red-900 hover:text-black"> Üye olmak istiyorum! </router-link>
    </span>
  </div>
</template>
<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      //password ü şifrelediğimiz için burada da şifreleyip kontrol ediyoruz.
      const passwordC = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      // GET /posts?title=json-server&author=typicode --- kullanıcıyı sorgulamak için kullanılan yapı--axios işlemleri
      this.axios
        .get(`http://localhost:3000/users?username=${this.userData.username}&password=${passwordC}`)
        .then((login_response) => {
          //login_response içindeki data bize array verdiği için ilk önce bu data içinde veri olup olmadığını kontrol ederiz. eğer 0 dan büyükse
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]); //login_response içindeki data nın ilk elemanını state içine at
            this.$router.push({ name: "homePage" }); //giriş başarılı ve kullanıcıyı state e attıktan sonra homaPage sayfasına yönlendir
          } else {
            alert("böyle bir kullanıcı bulunamadı..");
          }
          console.log("login_response :>> ", login_response);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
