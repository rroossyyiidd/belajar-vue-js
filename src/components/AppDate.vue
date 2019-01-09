<template>
  <span :title="timestamp | dateFormat">
    {{timestamp | diffForHuman}}
  </span>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'AppDate',
    props: {
      timestamp: {
        required: true,
        type: Number
      }
    },
    filters: {
      dateFormat (date) {
        return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
      },
      diffForHuman (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>

<style scoped>

</style>
