import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      context.commit('setPost', {post, postId})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})
    }
  },
  // untuk merubah isi store
  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread (state, {postId, threadId}) {
      const thread = state.threads[threadId].posts
      Vue.set(thread, postId, postId)
    },
    appendPostToUser (state, {postId, userId}) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
