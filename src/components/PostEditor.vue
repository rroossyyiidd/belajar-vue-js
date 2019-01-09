<template>
  <form v-on:submit.prevent="save">
    <div class="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
            v-model="newPostText"
          >
          </textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'PostEditor',
    props: {
      threadId: {
        required: true
      }
    },

    data () {
      return {
        newPostText: ''
      }
    },

    methods: {
      save () {
        const postId = 'greatPost' + Math.random()
        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2',
          '.key': postId
        }
        this.newPostText = ''

        // emit(nameOfEvent, data/argument/payload)
        this.$emit('save', {post})
      }
    }
  }
</script>

<style scoped>

</style>
