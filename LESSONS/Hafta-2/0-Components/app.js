const app = Vue.createApp({
  data() {
    return {
    };
  },
});


//component oluşturduk
app.component("counter-item",{
  data() {
    return {
      counter:0,
    }
  },
  template:`  <div class="container-sm ">

  <h3 class="">{{counter}}</h3>
  <button @click="counter--" class="red sm">-</button>
  <button @click="counter++" class="green sm">+</button>


</div>`


})
//component bitişi 

app.mount("#app");