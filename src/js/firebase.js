import firebase from 'firebase'
import config from './configs'

const firebasecConfig = {
  apiKey: config.get('FIREBASE.apiKey'),
  authDomain: config.get('FIREBASE.authDomain'),
  databaseURL: config.get('FIREBASE.databaseURL'),
  projectId: config.get('FIREBASE.projectId'),
  storageBucket: config.get('FIREBASE.storageBucket'),
  //messagingSenderId: config.get('FIREBASE.messagingSenderId'),
}

export default {
  init() {
    firebase.initializeApp(firebasecConfig)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  },
}
