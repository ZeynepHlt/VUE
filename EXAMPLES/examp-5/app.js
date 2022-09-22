const app = Vue.createApp({
    data() {
        return {
            search:"",
            list:["zeynep","arif","sümeyye","seda"],
            filteredListe:[],
           message:"Aranan değer bulunamadı"

        }
    },
    // this.filteredListe=this.list.filter((i)=>i.includes(this.search));
    methods: {
        ara(){
            this.filteredListe=[];
        
 
            this.list.filter((i)=>{

                if(i.includes(this.search)){
                    this.filteredListe.push(i);
                }
                else{
                    this.filteredListe="sad";
                } 
            })
           
          

        
           

          
               
            
           
        },
    },
    computed:{
        // filteredList(){
        //     return this.list.filter((i)=>i.includes(this.search));
        // }
    }
}).mount("#app");