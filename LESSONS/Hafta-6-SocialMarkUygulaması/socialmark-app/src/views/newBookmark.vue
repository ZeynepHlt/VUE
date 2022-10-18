<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
    <input v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select v-model="userData.categoryId" class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
    <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({ name: 'homePage' })" class="secondary-button">İptal</button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        categoryId: null,
        description: null,
      },
    };
  },
  //sayfa yüklendiğinde kategorileri optionslar içine getir ve yazdır
  mounted() {
    this.axios.get("http://localhost:3000/categories").then((category_response) => {
      // console.log("category_response :>> ", category_response);
      this.categoryList = category_response?.data || [];
    });
  },
  methods: {
    onSave() {
      // console.log(this.userData);
      // console.log(this._getCurrentUser);

      //db.json a aktaracağımız bilgiler
      const saveData = {
        //userDatanın hepsini al(başlık,url,kategori id si,açıklama)
        ...this.userData,
        //mevcut kullanıcının id sini al
        userId: this._getCurrentUser?.id,
        //tarih oluştur ve al
        created_at: new Date(),
      };
      //daha sonra bütün bilgileri db.json a aktar
      this.axios.post("http://localhost:3000/bookmarks", saveData).then((save_bookmark_response) => {
        console.log("save_bookmark_response :>> ", save_bookmark_response);
      });
      //kaydet butonuna basıldıktan sonra inputların içini boşalt
      Object.keys(this.userData)?.forEach((field) => this.userData[field] == null);
      //kayıt işlemi tamamlandığında homePage e yönlendir
      this.$router.push({ name: "homePage" });
    },
  },
  computed: {
    //mevcut kullanıcıyı al(hangi kullanıcının işlem yaptığını bilmemiz lazım)
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>
