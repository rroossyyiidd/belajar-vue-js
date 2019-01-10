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
        <img class="avatar-small" src="https://pbs.twimg.com/profile_images/881260299420041217/GMVGlDea_400x400.jpg"
             alt="">
        <span>
                Alex Kyriakidis
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
  export default {
    name: 'TheNavbar'
  }
</script>

<style scoped>

</style>
