//computed ile filtreleme yapımı
const app = Vue.createApp({
    data() {
        return {
            search:"", //search değiştiğinde itemListin filtrelenmiş halini göndereceğiz
            itemList:["elma","armut","çilek","muz"],
            // filteredList:[],
        }
    },
    methods: {
        // method şeklindede yazabilirdik.
        // searchList(){
        //     this.filteredList=this.itemList.filter((i)=>i.includes(this.search));
        // },
    },
    computed:{
        //buton kullanmadan
        filteredList(){
            //itemlist içinde dolaş search e yazılanı içeriyosa bul ve döndür. Harfleri tek tek kontrol eder
            return this.itemList.filter((i)=>i.includes(this.search))
       
        }


    }
}).mount("#app");