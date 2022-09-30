<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <addItem @onSave="onSave"></addItem>
    <itemList @onDelete="onDelete" :itemList="myData.itemList"></itemList>
    <ResultBar :itemCount="itemCount"></ResultBar>
  </div>
</template>

<script>
import addItem from "@/components/addItem.vue";
import itemList from "@/components/itemList.vue";
import ResultBar from "./components/resultBar.vue";
import axios from "axios";
export default {
  components: {
    addItem,
    itemList,
    ResultBar,
  },
  data() {
    return {
      myData: {
        itemList: [],
      },
    };
  },
  // provide() {
  //   return {
  //     itemList: this.myData.itemList,
  //     onSave: this.onSave,
  //     onDelete: this.onDelete,
  //     itemCount: this.itemCount,
  //   };
  // },
  mounted() {
    //sayafa yüklendiğinde get çalışır
    //json dan alınan veriler then içerisindeki items_reponse içine atılır
    axios.get(" http://localhost:3000/items").then((gelen_obje) => {
      this.myData.itemList = gelen_obje.data || []; //kendi itemListimizin içerisine json dan alınan verileri atıyoruz. (.data ile tüm veriler alınır)
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

      axios
        .post(" http://localhost:3000/items", saveObject)
        .then((giden_obje) => {
          this.myData.itemList.push(giden_obje.data); //bunu yapmazsak sayfa yenilendiğinde ekleme yapar.
          e.target.value = "";
          e.target.focus();
        });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(() => {
        this.myData.itemList = this.myData.itemList.filter(
          (i) => i.id != item.id
        ); //silinen eleman hariç hepsini al tekrar listeye at
      });
    },
  },
  computed: {
    itemCount() {
      return this.myData.itemList.length || 0; //itemList in uzunluğunu döndür eğer sorun varsa 0 döndür
    },
  },
};
</script>
