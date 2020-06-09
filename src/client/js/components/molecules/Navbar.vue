<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
    <router-link to="/" class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Finance Management" width="112" height="28">
    </router-link>
    </a>
    <div class="navbar-burger burger"
      v-bind:class="{'is-active': isHeaderMenuOpen}"
      @click="toggleHeaderMenuOpen()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="navbar-menu" v-bind:class="{'is-active': isHeaderMenuOpen}">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Top</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
  </div>
</nav>
</template>
<script>
export default{
  data(){
    return {
    }
  },
  created() {
  }
}
</script>
