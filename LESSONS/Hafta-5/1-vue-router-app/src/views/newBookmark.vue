<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input
        type="text"
        class="form-control"
        id="title"
        placeholder="başlık giriniz.."
        v-model="userData.title"
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        class="form-control"
        id="url"
        placeholder="https://..."
        v-model="userData.url"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        placeholder="açıklama giriniz...."
        v-model="userData.description"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <button
        class="btn btn-sm btn-secondary"
        @click="$router.push({ name: 'homePage' })"
      >
        İptal
      </button>
      <button class="btn btn-sm btn-primary ms-3" @click="onSave">
        Kaydet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //newbookmark içinden alacağımız veriler
      userData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    //KAYDET
    onSave() {
      // console.log(this.userData);
      //axios ile alınan verileri db.json a gönderme işlemi
      this.axios
        .post("http://localhost:3000/bookmarks", this.userData)
        .then((save_response) => {
          console.log("save_response :>> ", save_response);
          this.resetData(); //ekleme işlemi sonrasında input içindeki değerleri temizle
          this.$router.push("/"); //ekleme işleminden sonra anasayfaya geri dön
        });
    },

    //inputa girilen değerleri ekleme işleminden sonra silen fonksiyon
    resetData() {
      Object.keys(this.userData).forEach((key) => (this.userData[key] = null));
    },
  },
};
</script>
