<template>
  <header-comp></header-comp>
  <div id="content">
    <div class="sideBox"></div>
    <posts-comp></posts-comp>
    <div class="sideBox"></div>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import PostsComp from '@/components/PostsComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp,
    PostsComp
  }
}
</script>
<style scoped>
  #content{
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    text-align: center;
  }

@media(max-width: 800px) {
    .sideBox{
        display: none;
    }
    #content{
        grid-template-columns: 1fr;
    }
}
</style>
