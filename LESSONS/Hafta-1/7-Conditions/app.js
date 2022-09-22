const app = Vue.createApp({
    data() {
        return {
            showContainer:false,//click ile değişecek değişken
            counter:0,//click ile değişecek değişken 
            
        };
    },
    computed:{
        counterBoxClass(){
            return {"bg-success":this.counter>0,"bg-danger text-white":this.counter<0};
        },
    }
}).mount("#app");