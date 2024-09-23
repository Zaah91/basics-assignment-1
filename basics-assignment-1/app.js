const app = Vue.createApp({
    data(){
        return {
            personalName: 'Martin',
            personalAge: 33,
            imageHtml: 'https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png'
        }
    },
    methods: {
        agePlusFive(){
            const futureAge = this.personalAge + 5;
            return futureAge;
        },
        randomNumber(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');