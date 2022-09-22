const app = Vue.createApp({
    data() {
        return {
            //li de for içinde çekeceğimiz dizi
            todoList:[
                {id:1, text:"todo 1",completed:false},
                {id:2, text:"todo 2",completed:false},
                {id:3, text:"todo 3",completed:false},
                {id:4, text:"todo 4",completed:false},
                {id:5, text:"todo 5",completed:false},
                {id:6, text:"todo 6",completed:false},
                {id:7, text:"todo 7",completed:false},

            ],
        }
    },
    methods: {
        //v-model ilede yapılabilir
        addTodo(event){ //event -> inputun değerlerini tutan parametredir.
            this.todoList.push({
                id:new Date().getTime(), //id oluştururken zamanın değerini at
                text:event.target.value, //texte inputa girilen value değerini at
                completed:false //varsayılan olarakilk başta seçili değil
            

            });
            event.target.value=""; // sonra içini boşalt
            
        },
        removeItem(todoItem){
            //gelen todo objesi haricindekileri filtrele ve tekrar listeye at. Yani gelen todo ile liste içindeki todolardan biri ile eşlenmemişse o eşlenmeyeni alma diğerlerini al
            this.todoList=this.todoList.filter(t=>t!=todoItem);
        }
    },
    computed:{
        completedItemCount(){
            return this.todoList.filter((c)=>c.completed).length; //completedleri true olanları filtrele
            
        },
        uncompletedItemCount(){
            return this.todoList.filter((c)=> !c.completed).length; //completedleri false olanları filtrele
        }
 
    }
}).mount("#app");