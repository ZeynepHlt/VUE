const app = Vue.createApp({
    data() {
        return {
            counter1:0,
            counter2:0,
            name:null
            
        }
    },
    methods: {
      

    },
    computed:{
        c1Result(){
            console.log("counter 1 çalıştı")
            return this.counter1 >5 ? "5 ten büyük":"5 ten küçük";
         
        },
        c2Result(){
         console.log("counter 2 çalıştı");
         return this.counter2>5 ?"5 ten büyük":"5 ten küçük";
            
        },
      
     
     

    },
    watch:{
        counter1(newValue,oldValue){
            console.log("COUNTER 1 : eski=>" + oldValue +" Yeni=>"+newValue);
        },
        counter2(newValue,oldValue){
            console.log("COUNTER 2 : eski=>" + oldValue +" Yeni=>"+newValue);
        },
        name(newValue,oldValue){
            console.log("name değiştirildi: "+ "yeni=> "+ newValue+"eski=>"+oldValue);
        }
    }
}).mount("#app");