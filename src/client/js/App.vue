<template>
  <section class="section">
  <div class="container">
    <router-view></router-view>
  </div>
  </section>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  computed: {
    isLoading () {
      return this.$store.state.common.isLoading
    },
  },

  created: function () {
  },

  methods: {
  },
}
</script>
