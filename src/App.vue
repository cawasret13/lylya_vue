<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
  let agent = navigator.userAgent
  import Product from './views/pageAllProducts'
  import PageAllProducts from './views/pageAllProducts.vue';
  export default{
    components:{
    Product,
    PageAllProducts
    }
  }
</script>
<style>

</style>
