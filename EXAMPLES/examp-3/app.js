const app = Vue.createApp({

    data() {
        return {
            fullName:null,
            nameList:[]
        }
    },
    methods: {
        ekle(){
            this.nameList.push(this.fullName);
        }
    },


}).mount("#app");