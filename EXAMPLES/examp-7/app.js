const app = Vue.createApp({
    data() {
        return {
         headState:false, 
         counter:0,  
        }
    },
    computed:{
        bgChange(){
            return {"bg-success":this.counter>0,"bg-danger":this.counter<0}
        }
    }
}).mount("#app");