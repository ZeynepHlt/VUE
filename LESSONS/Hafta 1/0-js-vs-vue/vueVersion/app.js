const app = Vue.createApp({
        data() {
            return {
                todoText: null,
                todoList: [],

            };
        },
        methods: {
            addTodo() {
                this.todoList.push(this.todoText); //todoList e todoText ten geleni push et
            }
        },

    }).mount("#app") //#app adında bir template var. bu Vue.js uygulaması bunun içinde olacak