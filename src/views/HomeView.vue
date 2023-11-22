<template>
  <header-comp></header-comp>
  <div id="content">
    <div class="sideBox"></div>
    <div id="Posts">
      <div v-for="post in posts" :key="post.id">
        <post-comp :postId="post.id"></post-comp>
      </div>
      <button id=resetLikes @click="resetLikes()">Reset likes</button>
    </div>
    <div class="sideBox"></div>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import PostComp from '@/components/PostComp.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp,
    PostComp
  },
  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  },
  mounted () {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    increaseLikes (id) {
      this.$store.dispatch('increaseLikesAct', id)
    },
    resetLikes () {
      this.$store.dispatch('resetLikesAct')
    }
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
#Posts{
        margin-left: 2em;
        margin-right: 2em;
    }
    #resetLikes{
        text-align: center;
        margin-inline: auto;
    }
    #Posts{
        text-align: center;
    }
    #resetLikes{
        background-color: #87C4FF;
        border-radius: 1em 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        padding: 1em;
    }
</style>
