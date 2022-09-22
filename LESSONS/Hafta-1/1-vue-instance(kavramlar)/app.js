//Vue İnstance
const app = Vue.createApp({ //vue den createApp fonksyonunu kullan. 
    data() {
        return { //değişkenleri tanımla ve döndür
            title: "Başlık",
            content: "lorem ipsum dolar sit amet..",

            link: { //içeride tekrar bir obje tanımlanabilir
                title: "Tıklayabilirsiniz",
                target: "_blank",
                url: "https://google.com.tr",
                alt: "google"
            },

            coords:{
                x:0,
                y:0
            }
        };

    },
    methods: {

        changeTitle(pTitle) { //butonlarla başlık değiştir
            this.title = pTitle;

        },
        updateCoords(message,event){ //mousemove ile koordinat bul
            console.log(message,event.x, event.y);
            this.coords.x=event.x;
            this.coords.y=event.y;

            this.changeTitle(`${event.x},${event.y}`);//method içinde method çağırabiliriz

        }
    },

}).mount("#app"); //bu vue uygulamasının html de hangi sınırda çalışacağını belirt