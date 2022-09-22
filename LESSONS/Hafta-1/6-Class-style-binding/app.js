const app = Vue.createApp({
    data() {
        return {
            showBorder:false,
            redBG:false,
            bgColor: "cyan",
        }
    },
    computed:{
        //class ekleme
        boxClasess(){
            //showBorder ve redBG değerini butonda kontrol ediyoruz
            //border,redBG değeri true olursa ekler olmazsa eklemez,
            //buradaki border ve red bizim css teki classlarımız
        return {border:this.showBorder,red:this.redBG}

        }
    }
}).mount("#app");

