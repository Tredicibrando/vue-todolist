console.log('ciao');


const app = new Vue ({
    el: '#app',
    data:{
        message: '',
        items: [{
            text: this.message,
            data: false,
        }],
    },
    methods:{
        addNewItem(){
            if(this.message === ''){
                console.log('la stringa non contiene caratteri')
            } else {
                this.items.push(this.message);
                this.message = '';
                console.log(this.items,this.items.lenght)
            }   
        },

        removeNewItem(i){
            this.items.splice(i,1)
        }
  


    },
});