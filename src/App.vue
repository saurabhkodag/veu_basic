<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <todos v-bind:greet="greeting" v-bind:userdetails="user"/>
</template>

<script>

import todos from './components/todos/todos.vue'
export default {
  name: 'App',
  components: {
    todos
  },
  data(){
    return{
      greeting:"hello",
      user:[
        {
          id:1,
          name:"sourabh",
        },
        {
          id:2,
          name:"sachin",
        },
      ]
    }
},
beforeCreate(){
        console.log('parent before created');
    },
    created(){
        console.log('parent created');
    },
    beforeMount(){
        console.log('parent before mount');
    },
    mounted(){
        console.log('parent mount');
    },
    beforeUpdate(){
        console.log('parent before update');
    },
    Update(){
        console.log('parent update');
    },
    beforeUnmount(){
        //cancelling api,sub,cleaning,events
        console.log('parent before unmount');
    },
    Unmount(){
        console.log('parent unmount');
    }

}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}


</style>
