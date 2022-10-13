<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
    <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" />
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSave" class="default-button">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{ name: 'loginPage' }" class="text-red-900 hover:text-black"> Giriş yap! </router-link>
    </span>
  </div>
</template>
<script>
//password u gizlemek için crypto-js kullanıyoruz
import CryptoJS from "crypto-js";
export default {
  //buradan alacağımız veriler
  data() {
    return {
      userData: {
        fullname: null,
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      //PASSWORD Ü ŞİFRELEME
      const passwordC = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      // console.log("cryptedPassword :>> ", cryptedPassword);
      //PASSWORD ÜN ŞİFRESİNİ AÇMA
      // const decryptedPassword = CryptoJS.AES.decrypt(cryptedPassword, key).toString(CryptoJS.enc.Utf8);
      // console.log("decryptedPassword :>> ", decryptedPassword);

      //şifreli passwordü gönderirken userData içindeki herşeyi gönder password ü cryptedPassword olarak gönder
      this.axios.post("http://localhost:3000/users", { ...this.userData, password: passwordC }).then((saved_response) => {
        console.log("saved_response :>> ", saved_response);
      });
      console.log(this.userData);
    },
  },
};
</script>
