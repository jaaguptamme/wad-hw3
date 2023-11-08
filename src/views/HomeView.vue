<template>
  <header-comp></header-comp>
  <div id="content">
    <div class="sideBox"></div>
    <div id="Posts">
      <div v-for="post in posts" :key="post.id">
        <div class="PostPhoto" v-if="'pictureLink' in post">
          <div class="topRow">
            <a class="postericon">
              <img :src="post.icon" alt="Picture of post author"></a>
            <p>{{ post.date }}</p>
          </div>
          <img class="contentpicture" :src="post.pictureLink" alt="Content Picture">
          <p>{{post.text}}</p>
          <div class="bottomRow">
            <a class="likeicon"><img src="../assets/like.png" alt="Like button" @click='increaseLikes(post.id)'>
            </a>
            <p>{{ post.likes }} likes</p>
          </div>
        </div>
        <div v-else class="PostText">
          <div class="topRow">
            <a class="postericon">
              <img :src="post.icon" alt="Picture of post author"></a>
            <p>{{ post.date }}</p>
          </div>
          <p>{{post.text}}</p>
          <div class="bottomRow">
            <a class="likeicon"><img src="../assets/like.png" alt="Like button" @click='increaseLikes(post.id)'></a>
            <p>{{ post.likes }} likes</p>
          </div>
        </div>
      </div>
      <button id=resetLikes>Reset likes</button>
    </div>
    <div class="sideBox"></div>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    FooterComp
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
  #postericon{
    display: inline-block;
}
.logo > img{
    width: 5rem;
    height: 5rem;
    display: block;
    border-radius: 2em;
}

.postericon img{
    border-radius: 2rem;
}

img{
    width: 4rem;
    height: 4rem;
}

.contentpicture{
    width: 100%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

  .postericon ~ p{
      align-self:flex-end;
  }
  .sideBox + div div{
    text-align: left;
  }
  .sideBox + div{
    text-align: center;
  }

  #Posts{
    margin-left: 2em;
    margin-right: 2em;
  }
  .topRow, .bottomRow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.PostPhoto, .PostText, #resetLikes{
    background-color: #87C4FF;
    border-radius: 1em 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 1em;
}

#resetLikes{
  text-align: center;
  margin-inline: auto;
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
