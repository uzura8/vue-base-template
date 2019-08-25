import * as types from './mutation-types'
import { Firebase, Transaction } from '../api'

export default {
  setHeaderMenuOpen: ({ commit }, isOpen) => {
    commit(types.SET_COMMON_HEADER_MENU_OPEN, isOpen)
  },

  setIsLoading: ({ commit }, isLoading) => {
    commit(types.SET_COMMON_LOADING, isLoading)
  },

  signIn: ({ commit }, payload) => {
    commit(types.SET_COMMON_LOADING, true)
    return Firebase.signIn(payload)
      .then(result => {
        commit(types.SET_COMMON_LOADING, false)
        commit(types.AUTH_SET_USER, result.user.uid)
        commit(types.AUTH_UPDATE_STATE, true)
        commit(types.AUTH_SET_ERROR, null)
      })
      .catch(error => {
        commit(types.SET_COMMON_LOADING, false)
        commit(types.AUTH_UPDATE_STATE, false)
        commit(types.AUTH_SET_ERROR, error.message)
      })
  },

  signOut: ({ commit }) => {
    commit(types.SET_COMMON_LOADING, true)
    return Firebase.signOut()
      .then(result => {
        console.log(result)
        commit(types.SET_COMMON_LOADING, false)
        commit(types.AUTH_SET_USER, null)
        commit(types.AUTH_UPDATE_STATE, false)
        commit(types.AUTH_SET_ERROR, null)
      })
      .catch(error => {
        commit(types.SET_COMMON_LOADING, false)
        commit(types.AUTH_SET_ERROR, error.message)
      })
  },

  updateAuthState: ({ commit }, user) => {
    user = user ? user : {};
    commit(types.AUTH_SET_USER, user.uid)
    commit(types.AUTH_UPDATE_STATE, user.uid ? true : false)
    commit(types.AUTH_SET_ERROR, null)
  },

  fetchTransactions: ({ commit }, payload) => {
    commit(types.SET_COMMON_LOADING, true)
    return Transaction.fetch(payload)
      .then(({ lists }) => {
        commit(types.FETCH_TRANSACTIONS_LIST, lists)
        commit(types.SET_COMMON_LOADING, false)
      })
      .catch(err => {
        commit(types.SET_COMMON_LOADING, false)
        throw err
      })
  },

  createTransaction: ({ commit }, payload) => {
    return Transaction.create(payload)
      .then((item) => {
        commit(types.CREATE_TRANSACTION, item)
      })
      .catch(err => { throw err })
  },

  updateTransaction: ({ commit }, payload) => {
    return Transaction.update(payload.transactionId, payload.values)
      .then((item) => {
        commit(types.UPDATE_TRANSACTION, {
          transactionId: payload.transactionId,
          values: item,
        })
      })
      .catch(err => { throw err })
  },

  deleteTransaction: ({ commit }, presetId) => {
    return Transaction.delete(presetId)
      .then((item) => {
        const data = {
          transactionId: presetId,
          values: item,
        }
        commit(types.DELETE_TRANSACTION, data)
      })
      .catch(err => { throw err })
  },
}

