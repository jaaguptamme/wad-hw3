import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: []
    /*
    posts: JSON.parse(`[
      {
          "date" : "Oct 2, 2023",
          "text": "Why did chicken cross road?",
          "icon":  "https://cdn-icons-png.flaticon.com/512/666/666201.png"
      },
      {
          "date" : "Nov 11, 2022",
          "text": "Anyone knows in which room is the lab today?",
          "pictureLink":"https://www.ecb.ee/wp-content/uploads/2022/06/Tartu-2024-1980x1321.jpg",
          "icon":  "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-grey-male-icon.png"
      }
  ]`) .forEach(element => {
      element.likes = 0
    }) */
  },
  getters: {
    getPosts: state => {
      return state.posts
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    increaseLikes (state, id) {
      state.posts[id].likes += 1
    },
    resetLikes (state) {
      let i = 0
      while (i < state.posts.length) {
        state.posts[i].likes = 0
        i++
      }
    }
  },
  actions: {
    fetchPosts () {
      const postsList = []
      let index = 0
      fetch('http://localhost:3000/Posts')
        .then((res) => res.json()).then((posts) => {
          for (const post of posts) {
            post.id = index
            index += 1
            post.likes = 0
            postsList.push(post)
            this.commit('updatePosts', postsList)
          }
        })
    },
    increaseLikesAct ({ commit }, id) {
      this.commit('increaseLikes', id)
    },
    resetLikesAct ({ commit }) {
      this.commit('resetLikes')
    }
  },
  modules: {
  }
})
