<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-primary btn-sm"
        @click="$router.push({ name: 'newBookmark' })"
      >
        Yeni Ekle +
      </button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">Url</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmark in bookMarksList" :key="bookmark.id">
          <th scope="row">{{ bookmark.id }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>{{ bookmark.description }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteBookmark(bookmark)"
            >
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookMarksList: [],
    };
  },
  created() {
    //db.json dan verileri getirme işlemi
    this.axios
      .get("http://localhost:3000/bookmarks")
      .then((bookmarks_list_response) => {
        console.log("bookmarks_list_response :>> ", bookmarks_list_response);
        this.bookMarksList = bookmarks_list_response.data || [];
      });
  },
  methods: {
    //SİL
    deleteBookmark(bookmark) {
      // console.log("bookmark :>> ", bookmark);
      this.axios
        .delete(`http://localhost:3000/bookmarks/${bookmark.id}`)
        .then((delete_response) => {
          console.log("delete_response :>> ", delete_response);
          if (delete_response.status == 200) {
            this.bookMarksList = this.bookMarksList.filter(
              (b) => b.id != bookmark.id
            ); //bookmarkList teki arkadaşlardan benim sildiğim arkadaştan id si farklı olanları geri listeye at
          }
        });
    },
  },
};
</script>
