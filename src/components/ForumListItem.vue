<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        class="text-xlarge"
        :to="{name:'PageForum', params:{id:forum['.key']}}"
      >
        {{forum.name}}
      </router-link>
      <p>{{forum.description}}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{threadCount}}</p>
      {{threadCount === 1 ? 'thread':'threads'}}
    </div>

    <div class="thread-list">
      <!-- TODO: implement later-->
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ForumListItem',
    props: {
      forum: {
        required: true,
        type: Object
      }
    },
    computed: {
      threadCount () {
        return this.forum.threads ? Object.values(this.forum.threads).length : 0
      }
    }
  }
</script>

<style scoped>

</style>
