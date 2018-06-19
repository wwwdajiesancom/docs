<template>
    <div>
        woshi {{getJson}}
        <button @click="add">增加</button>
    </div>
</template>

<script>
import {json2} from '@/js/test'

export default {
  name: 'HelloWorld',
  data () {
    return {
      id:'',
    }
  },
  computed:{
    getCount(){
      return this.$store.getters.getCount;
    },
    getJson(){
      return json2;
    }
  },
  methods:{
    add(){
      this.$store.dispatch('addCount');
    },
    doc(event){
        this.id = event.currentTarget.id;
        alert(this.id)
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
