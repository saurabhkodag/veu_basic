import "./todos.css"

export default {
    name: 'todo',
    props:{
    greet:{
        type:String
    },
    userdetails:{
        type:Array
    }
    },
    data(){

       return { 
           name:"vue js",
           success:"main",
           message:`<b>good morning</b>`,
           flag:true,
    }
    },
    methods:{
        submit(n){
            this.name=n;
            
        }
    },
    beforeCreate(){
        console.log('child before created');
    },
    created(){
        console.log('child created');
    },
    beforeMount(){
        console.log('child before mount');
    },
    mounted(){
        console.log('child mount');
    },
    beforeUpdate(){
        console.log('child before update');
    },
    updated(){
        console.log('child update');
    },
    beforeUnmount(){
        //cancelling api,sub,cleaning,events
        console.log('before unmount');
    },
    Unmount(){
        console.log('unmount');
    }
  }