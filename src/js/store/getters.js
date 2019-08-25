export default {
  user (state) {
    return state.auth.user;
  },

  error (state) {
    return state.auth.error;
  },

  transaction: state => (transactionId) => {
    return state.transaction.list.find(item => {
      return item.id === transactionId
    })
  },
}
