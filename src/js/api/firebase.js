import firebase from 'firebase'

export default {
  signIn: (params) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(params.username, params.password)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  googleSignIn: () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signOut: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },
}
