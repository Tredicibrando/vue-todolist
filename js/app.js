console.log('ciao');


const app = new Vue ({
    el: '#app',
    data:{
        message: '',
        items: [],
    },
    methods:{
        addNewItem(){
            if(this.message === ''){
                console.log('la stringa non contiene caratteri')
            } else {
                const NewItem = {
                    text: this.message,
                    data: false
                }
                this.items.push( NewItem );
                this.message = '';
                console.log(this.items)
            }   
        },

        removeNewItem(i){
            this.items.splice(i,1)
        }
  


    },
});