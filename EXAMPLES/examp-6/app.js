const app = Vue.createApp({
    data() {
        return {
            borderState:false,
            bgState:false,
            sizeState:false,
            box2Color:null,
            
        }
    },
    computed:{
        boxClass(){
            return {borderC:this.borderState,backGroundC:this.bgState,sizeBoxC:this.sizeState}
        }
    }
}).mount("#app");