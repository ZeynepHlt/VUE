const app = Vue.createApp({
    data() {
        return {
            title:"Examp-2",
            title2:null,
            link:{
                href:"https://mybrandnewlogo.com/tr/renk-paleti-ureteci",
                target:"_blank",
                alt:"css renk",
                content:"Tıklayınız.."
            },

          
        }
    },
    methods: {
        change(ptitle){
            this.title=ptitle;
        },
        //butona tıklandığındaki özellikleri yazdırdık
        eventF(event){
            console.log(event);
        },
        coord(event){
            this.title2=`${event.x},${event.y}`;
        }

    },
}).mount("#app");