<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name:'PageThreadShow', params:{id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>,
        <AppDate :timestamp="thread.publishedAt"/>
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} replies
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThreadListItem',
    props: {
      thread: {
        required: true,
        type: Object
      }
    },
    computed: {
      // fungsi untuk menghitung balasan
      repliesCount () {
        return Object.keys(this.thread.posts).length - 1
      },
      user () {
        return this.$store.state.users[this.thread.userId]
      }
    }
  }
</script>

<style scoped>

</style>
