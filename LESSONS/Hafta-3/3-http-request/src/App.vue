<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <!-- !itemlist in içi dolu ise  -->
    <ul v-if="this.itemList.length > 0">
      <li
        v-for="item in itemList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <!-- !itemlist in içi boş ise  -->
    <div v-else class="bg-blue text-white">
      Herhangi bir ürün eklemediniz...
    </div>
    <small class="text-green d-flex justify-content-end align-items-center mt-2"
      >{{ itemCount }} adet alınacak ürün vardır..</small
    >
  </div>
</template>
<script>
// axios u import et
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    //sayafa yüklendiğinde get çalışır
    //json dan alınan veriler then içerisindeki items_reponse içine atılır
    axios.get(" http://localhost:3000/items").then((items_response) => {
      console.log("items_response :>> ", items_response);
      this.itemList = items_response.data || []; //kendi itemListimizin içerisine json dan alınan verileri atıyoruz. (.data ile tüm veriler alınır)
      console.log("itemList :>> ", this.itemList);
    });
  },
  methods: {
    onSave(e) {
      //json a eklenecek bir obje oluşturduk ve değerlerini enter a basınca alacak
      const saveObject = {
        title: e.target.value, //title ı inputtan girilen değerden alır
        created_at: new Date(), //oluşturulma tarihi
        completed: false, //tamamlanma durumu
      };
      //axios ile json adresine bu objeyi gönderdik (POST). Gönderdikten sonra js te promise den yararlandık başarılı şekilde gönderme tamamlandığında then callback fonksiyonu ile o değeri console da yazdırdık
      axios
        .post(" http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response); //gönderilen obje
          this.itemList.push(save_response.data); //bunu yapmazsak sayfa yenilendiğinde ekleme yapar.
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id}`)
        .then((delete_response) => {
          console.log("delete_response :>> ", delete_response);
          this.itemList = this.itemList.filter((i) => i.id != item.id); //silinen eleman hariç hepsini al tekrar listeye at
        });
    },
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0; //itemList in uzunluğunu döndür eğer sorun varsa 0 döndür
    },
  },
};
</script>
