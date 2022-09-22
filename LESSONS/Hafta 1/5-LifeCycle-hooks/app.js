const app = Vue.createApp({
    data() {
        return {
            title:"test başlığı",
            itemList:[]
        }
    },
    //lifecycle hooks 
    beforeCreate() {
        console.log("beforeCreate Çalıştı...")
    },
    created() {
        console.log("created Çalıştı...");
        //2 sn sonra itemlist içine bu değerleri at ve göster(bupdate ve update çalışır)
        setTimeout(()=>{
            this.itemList=[1,2,3,5,6,8,55,66];
        },2000);
        //3sn sonra başlığı değiştir
        setTimeout(() => {
            this.title="bu yeni başlık"
        }, 3000);
    },
    beforeMount() {
        console.log("beforeMount Çalıştı...")
    },
    mounted() {
        console.log("mounted Çalıştı...")
    },
    beforeUpdate() {
        console.log("beforeUpdate Çalıştı...")
    },
    updated() {
        console.log("updated Çalıştı...")
    },
    beforeUnmount() {
        console.log("beforeUnmount Çalıştı...")
    }, 
    unmounted() {
        console.log("unmounted Çalıştı...")
    },
});
app.mount("#app");

//5 sn sonra uygulama tamamen kapanır 
setTimeout(() => {
    app.unmount();
}, 5000);