const app = Vue.createApp({
  data() {
    return {
      alertState:false,
      value:"",
    };
  },
  methods: {
    show(event){
      this.value=event.target.value;
     
    },

  },

});
app.mount("#exercise");
