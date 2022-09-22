const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: false },
        { id: 3, text: "Todo 3", completed: false },
        { id: 4, text: "Todo 4", completed: false },
        { id: 5, text: "Todo 5", completed: false },
        { id: 6, text: "Todo 6", completed: false },
        { id: 7, text: "Todo 7", completed: false },
        { id: 8, text: "Todo 8", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      //inputtan gelen value y(boş değilse) todoLİste push et.(v-model ile de yapılabilir)
      if (event.target.value != "") {
        this.todoList.push({
            id:new Date().getTime(), //yeni item a id eklerken şu anki saati kullan
            text:event.target.value,//text ine inputa girilen değeri at 
            completed:false, //seçilme durumunu varsayılan olarak false yap
        })  
      } 
      else {
        alert("lütfen görev giriniz..");
      }
      event.target.value = "";
    },
    removeItem(todoItem){
        //todoList içinde t ile dolaştık ve gelen todo nun id si ile todoList içindeki id leri karşılaştırdık. eşit olmayanı almadı. diğerlerini tekrar todoListe attık.(filtreleme yaptık)(id si eşit olmayanların haricindekileri al)
        this.todoList=this.todoList.filter((t)=>t.id!=todoItem.id);
    }
  },
  computed:{
    completedItemCount(){
        //todoList içindeki true olan completed ları al ve sayısını döndür
        return this.todoList.filter(t=>t.completed).length;
    },
    unCompletedItemCount(){
        //todoList içindeki false olan completed ları al ve sayısını döndür
        return this.todoList.filter(t=>!t.completed).length;
    },
 
  }
}).mount("#app");
