const app = Vue.createApp({
    data() {
        return {
            value:0
        }
    },
    computed:{
        result(){
            return this.value>=33 ? 'Tamamlandı':'Henüz bitmedi';
        }
    },
    watch:{
        //result u watch ile izleyebiliriz
      result(){
        setTimeout(() => {
            this.value=0;
        }, 3000);
      }
    }

}).mount("#exercise");