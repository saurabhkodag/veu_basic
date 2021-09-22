import { createApp } from 'vue'
import App from './App.vue'

export default {
    beforeCreated(){
        console.log('before created');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('before mount');
    },
    Mount(){
        console.log('mount');
    },
    beforeUpdate(){
        console.log('before update');
    },
    Update(){
        console.log('update');
    },
    beforeUnmount(){
        //cancelling api,sub,cleaning,events
        console.log('before unmount');
    },
    Unmount(){
        console.log('unmount');
    }

}
createApp(App).mount('#app')
