<template>
<div class="signup">
  <h1 class="title">Sign Up</h1>

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

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="signUp">Register</button>
    </div>
  </div>

  <p>Do you have an account? 
    <router-link to="/signin">sign in now!!</router-link>
  </p>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
