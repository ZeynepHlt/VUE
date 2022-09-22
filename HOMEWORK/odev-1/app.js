const app = Vue.createApp({
    data() {
        return {
            name:"zeynep",
            age:25,
            number:"",
            img:{
                link:"https://www.birhayalinpesinde.com/wp-content/uploads/2016/02/gunbatimi-692x432.jpg",
                alt:"kalp",

            }
            
        }
    },
    methods: {
        randonNumber(){
            this.number =Math.random().toFixed(1);
            return this.number;
        },
        changeName(event){
            this.name=event.target.value;
        }
    },
    computed:{
        ageCalculate(){
            return this.age*5;
        }
    }
}).mount("#exercise");