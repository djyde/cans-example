import { observable, action, extendObservable } from 'cans/mobx'
import {
  message
} from 'antd'

class Store {
  constructor () {

  }
}

export const model = {
  namespace: 'curd',
  observable: app => observable({
    posts: [],
    currentPost: null,
    isLoading: false,

    create: action.bound(async function () {
      try {
        app.models.modals.createUser.startLoading()
        const res = await app.plugins.http.post('http://jsonplaceholder.typicode.com/users', {  })
        app.models.modals.createUser.hide()
        message.success('success')
      } catch (e) {
        message.error('something error')
      } finally {
        app.models.modals.createUser.stopLoading()
      }
    }),

    edit: action.bound(function () {

    }),

    remove: action.bound(async function (postId) {
      try {
        this.isLoading = true
        const res = await app.plugins.http.delete('http://jsonplaceholder.typicode.com/users/' + postId)
        message.success('success')
      } catch (e) {
        // TODO: display error
        message.error('something wrong')
      } finally {
        this.isLoading = false
      }
    }),

    fetch: action.bound(async function () {
      try {
        this.isLoading = true
        const res = await app.plugins.http.get('http://jsonplaceholder.typicode.com/users')
        this.posts = res.data
      } catch (e) {
        // TODO: display error
        message.error('something wrong')
      } finally {
        this.isLoading = false
      }
    })
  })
}
