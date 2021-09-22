<template>
  <div class="hello">
    
    <!-- <h1>{{ msg }}</h1> -->
    <h1 class="hm" v-bind:id="success">{{name}}</h1>
    <h3 v-html="message"></h3>
    <p v-if="flag">it is true</p>
    <p v-else>it is false</p>
    <p v-show="flag">show</p>
  <div>{{greet}}</div>
 
    <div v-for="objj in userdetails" :key="objj.id">      
      <p>
          {{objj.name}}
      </p>
     
  </div>
  
  <button @click="submit('change')" style="width:60px; height:50px">change text</button>
  </div>
    
</template>
<script type="module" src="./todos.js"></script>

