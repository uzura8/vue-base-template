<template>
<div class="signin">
  <h1 class="title">Sign in</h1>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Email" v-model="username">
    </div>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="password" placeholder="Password" v-model="password">
    </div>
  </div>

  <div class="field">
    <div class="control">
      <button class="button is-link" @click="signIn">Sign In</button>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <b-button block variant="primary" @click="googleSignIn">Google Sign In</b-button>
    </div>
  </div>

  <p>You don't have an account? 
    <router-link to="/signup">create account now!!</router-link>
  </p>
</div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },

  created: function() {
    if (this.$store.state.auth.state) {
      this.$router.push('/member')
    }
  },

  methods: {
    signIn: function () {
      const authInfo = {
        username: this.username,
        password: this.password,
      }
      this.$store.dispatch('signIn', authInfo)
        .then(() => {
          this.$router.push('/member')
        })
        .catch(err => {
          this.throwReject(err)
        })
    },

    googleSignIn() {
      this.$store.dispatch('googleSignIn')
        .then(() => {
          this.$router.push('/member')
        })
        .catch(err => {
          this.throwReject(err)
        })
    },

    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
</style>
