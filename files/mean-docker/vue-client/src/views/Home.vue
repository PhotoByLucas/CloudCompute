<template>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return  {
      test:'aaa'
    };
  },
  mounted() {
    this.$api({
          method:'get',
          url:'http://148.100.87.15:8080/api/todos',
          data:{}
        }).then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })
  },
  components: {
    
  }
}
</script>
