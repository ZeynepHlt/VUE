<!-- !HomePage -->
<template>
  <!-- !header (application seviyesinde)-->
  <appHeader></appHeader>
  <div class="flex flex-row">
    <!-- !sidebar (component seviyesinde) -->
    <!-- *sideBar dan bir emit gönderildi bookmarkları kategorisine göre göstermek için -->
    <sideBar @category-changed="updateBookmarkList"></sideBar>
    <!-- !bookmarkların bulunduğu kısım (application seviyesinde) props ile listeyi gönder -->
    <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList"></appBookmarkList>
    <div v-else>Bu Kategoride Bookmark Bulunmamaktadır...</div>
  </div>
</template>

<script>
import sideBar from "@/components/Home/sideBar.vue";

export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  components: {
    sideBar,
  },
  created() {
    //db.json dan bookmark bilgilerini getir
    //expand ile db.jsondaki categoriesteki id ler ile bookmarkstaki id ler eşleştirilir. bu şekilde categori id si ile categori başlığına ulaşabilirz
    this.axios.get(" http://localhost:3000/bookmarks?_expand=category&_expand=user").then((bookmarklist_response) => {
      console.log("bookmarklist_response :>> ", bookmarklist_response);
      this.bookmarkList = bookmarklist_response?.data; //bookmarkListe attık ve bookMarkları kapsayan componente prop ile gönderdik
    });
  },
  methods: {
    //bookmarkları seçilen kategoriye göre göstermek için tekrardan çekiyoruz ve fonksiyona gönderilen parametreye göre olan bookmarkları gösterir.
    //categoryID gönderilmiş ve null değilse seçilen categoryid ye göre gösterim yap. değilse hepsini göster
    updateBookmarkList(categoryID) {
      const url = categoryID ? `http://localhost:3000/bookmarks?_expand=category&_expand=user&categoryId=${categoryID}` : `http://localhost:3000/bookmarks?_expand=category&_expand=user`;
      this.axios.get(url).then((bookmarklist_response) => {
        console.log("bookmarklist_response :>> ", bookmarklist_response);
        this.bookmarkList = bookmarklist_response?.data; //bookmarkListe attık ve bookMarkları kapsayan componente prop ile gönderdik
      });
    },
  },
};
</script>
