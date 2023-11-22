<template>
    <div v-if="'pictureLink' in post" class="PostPhoto">
        <div class="topRow">
        <a class="postericon">
            <img :src="post.icon" alt="Picture of post author"></a>
        <p>{{ post.date }}</p>
        </div>
        <img class="contentpicture" :src="post.pictureLink" alt="Content Picture">
        <p class="text">{{post.text}}</p>
        <div class="bottomRow">
        <a class="likeicon"><img src="../assets/like.png" alt="Like button" @click='increaseLikes(post.id)'></a>
        <p>{{ post.likes }} likes</p>
        </div>
    </div>
    <div v-else class="PostText">
        <div class="topRow">
        <a class="postericon">
            <img :src="post.icon" alt="Picture of post author"></a>
        <p>{{ post.date }}</p>
        </div>
        <p class="text">{{post.text}}</p>
        <div class="bottomRow">
        <a class="likeicon"><img src="../assets/like.png" alt="Like button" @click='increaseLikes(post.id)'></a>
        <p>{{ post.likes }} likes</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostComp',
  props: {
    postId: Number
  },
  components: {
  },
  computed: {
    post () {
      return this.$store.getters.getPosts[this.postId]
    }
  },
  methods: {
    increaseLikes (id) {
      this.$store.dispatch('increaseLikesAct', id)
    }
  }
}
</script>

<style scoped>
  .PostPhoto, .PostText, #resetLikes{
        background-color: #87C4FF;
        border-radius: 1em 1em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        padding: 1em;
    }
    .topRow, .bottomRow{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .postericon ~ p{
        align-self:flex-end;
    }

    #postericon{
        display: inline-block;
    }
    .postericon img{
        border-radius: 2rem;
    }
    .contentpicture{
        width: 100%;
        height: 80%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .contentpicture{
        width: 100%;
        height: 80%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .logo > img{
        width: 5rem;
        height: 5rem;
        display: block;
        border-radius: 2em;
    }

    img{
        width: 4rem;
        height: 4rem;
    }

    p.text{
        text-align: left;
    }

</style>
