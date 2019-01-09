<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import ThreadList from '../components/ThreadList'
  import ForumList from '../components/ForumList'
  import CategoryList from '../components/CategoryList'

  export default {
    name: 'PageHome',
    components: {
      ThreadList,
      ForumList,
      CategoryList
    },
    data () {
      return {
        categories: Object.values(sourceData.categories)
      }
    }
  }
</script>
