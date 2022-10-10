<template>
  <div class="container">
    <div class="mb-2">
      <!-- !router-link ile gideceğimiz yerleri belirtiriz ve sayfa yenilemeden gider  -->
      <router-link to="/" class="nav-link" active-class="active"
        >Anasayfa</router-link
      >
      <router-link to="/hakkimda" class="nav-link" active-class="active"
        >Hakkımda</router-link
      >
      <router-link to="/detay/123" class="nav-link" active-class="active"
        >Detay</router-link
      >
    </div>
    <!-- !router-view i kullanmamızın sebebi diğer componentleriin içeriğini göstermek -->
    <router-view> </router-view>
  </div>
</template>

<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid black;
  color: black;
  display: inline-block;
  margin: 10px 15px;
}
.active {
  background-color: black;
  color: #fff;
}
</style>
