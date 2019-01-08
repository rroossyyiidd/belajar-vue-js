<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <div v-for="thread in threads">
      <h2>{{thread.title}}</h2>
      <!--ngmabil post id yang ada di setiap thread-->
      <div v-for="postId in thread.posts">
        <!--mengambil nama user yg membuat post di thread, mengambil post by id, lalu mengambil user id, lalu mengambil namanya-->
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'

  console.log('isi sourceData: ', sourceData)
  export default {
    name: 'HelloWorld',
    data () {
      return {
        threads: sourceData.threads,
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>
