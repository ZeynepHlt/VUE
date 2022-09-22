const app = Vue.createApp({
    data() {
        return {
            counter:0,
            counter2:0
        }
    },
    methods: {

        //aşağıdaki fonksiyonları butonlara bağlayabiliriz fakat kısa bir kod olduğu için direkt html içinde yazmak daha mantıklıdır
        // inc(){
        //     this.counter++;

        // },
        // dec(){
        //     this.counter--;

        // }

    },
    //computed methods gibi tanımlanır ve ilgili yeri çalıştırır sadece. çağırılırken değişken gibi çağırılır.
    computed:{
        getCounterResult(){
            console.log("counter 1 çalıştı");
            return this.counter >5?"BÜYÜK":"KÜÇÜK";
        },
        getCounter2Result(){
            console.log("counter 2 çalıştı");
            return this.counter2 >5?"BÜYÜK":"KÜÇÜK";
        }
    },
    watch:{
        //counter datasını izle. eski ve yeni değerini verir
        counter(newValue,oldValue){
            console.log("counter izle :", oldValue , "=>" ,newValue);
        },
        //büyük küçük sonucunu izle. küçük/büyük değişimi olunca çalışır
        getCounterResult(newValue,oldValue){
            console.log("büyük/küçük izle :",oldValue , "=>" ,newValue);
        },
    }
 

}).mount("#app");