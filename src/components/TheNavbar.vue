<template>
  <header class="header" id="header">
    <router-link :to="{name: 'PageHome'}" class="logo">
      <img src="../assets/img/vueschool_logo.svg">
    </router-link>

    <div class="btn-hamburger">
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <li class="navbar-user">
      <a href="#">
        <img class="avatar-small" :src="user.avatar"
             alt="">
        <span>
                {{user.name}}
                <img class="icon-profile" src="../assets/img/arrow-profile.svg" alt="">
            </span>
      </a>

      <!-- dropdown menu -->
      <!-- add class "active-drop" to show the dropdown -->
      <div id="user-dropdown">
        <div class="triangle-drop"></div>
        <ul class="dropdown-menu">
          <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
          <li class="dropdown-menu-item"><a href="#">Log out</a></li>
        </ul>
      </div>
    </li>

  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'TheNavbar',
    computed: {
      ...mapGetters({
        'user': 'authUser'
      })
    }
  }
</script>

<style scoped>

</style>
