const app = Vue.createApp({
  data() {
    return {
      title: "Examp-1",
      text: null,
      todoList: [],
    };
  },
  methods: {
    add() {
      this.todoList.push(this.text);
    },
    remove(i) {
      this.todoList = this.todoList.filter((j) => j != i);
    },
  },
}).mount("#app");
