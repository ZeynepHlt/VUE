const app = Vue.createApp({
    data() {
        return {
            s1:null,
            s2:null,
            result:null,
        }
    },
    methods: {
        hesapla(){
            this.result= Math.sqrt(Math.pow(this.s1,2)+Math.pow(this.s2,2));
            this.result=this.result.toFixed(1);
        }
    },
}).mount("#app");