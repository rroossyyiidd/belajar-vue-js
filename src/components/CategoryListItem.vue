<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'PageCategory', params:{id: category['.key']}} ">
        {{category.name}}
      </router-link>
    </h2>

    <ForumList :forums="categoryForum"/>
  </div>
</template>

<script>
  import ForumList from './ForumList'
  import sourceData from '@/data'

  export default {
    name: 'CategoryListIte',
    components: {
      ForumList
    },
    props: {
      category: {
        required: true,
        type: Object
      }
    },
    computed: {
      categoryForum () {
        return Object.values(sourceData.forums).filter(forum => forum.categoryId === this.category['.key'])
      }
    }
  }
</script>

<style scoped>

</style>
