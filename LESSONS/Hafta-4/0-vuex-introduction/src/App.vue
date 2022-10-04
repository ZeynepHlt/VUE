<template>
  <p>
    <NewUser></NewUser>
    <UserList></UserList>
    <!-- !store içindeki state içindeki person objesini yazdır -->
    <!-- {{ $store.state.user }} -->
    <!-- !store içindeki state içindeki permission dizisini yazdır -->
    <!-- {{ $store.state.permission }} -->
    <!-- !iterate ederkende $ ile ulaşabiliriz -->
    <!-- <ul>
    <li v-for="(p,index) in $store.state.permission" :key="index">
      {{ index}},{{p}}
    </li>
  </ul> -->
    <!-- <ul>
    <li v-for="u in $store.state.userList" :key="u">
      {{ u }}
    </li>
  </ul>-->
    <!-- !woodItems içinde olan mobilya type ına sahip objeleri yazdır -->
    <!-- <ul> 
    <li v-for="item in woodItems" :key="item">
      {{ item.title }}
    </li>
  </ul> -->
    <!-- !state in içindeki bilgiyi güncelleme -->

    <!-- {{$store.state.fullName}} -->
    <!-- <button @click="updateName">İsim değiştir</button> -->
  </p>
</template>

<script>
import NewUser from "@/components/NewUser.vue";
import UserList from "@/components/UserList.vue";
// import { mapGetters } from "vuex"; //mapGetters gettters içindekilere computed olarak erişimimizi sağlar
export default {
  components: { NewUser, UserList },
};
</script>
