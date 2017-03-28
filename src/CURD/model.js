import { observable, action, extendObservable } from 'cans/mobx'
import {
  message
} from 'antd'

export const model = {
  namespace: 'curd',
  observable: app => observable({
    posts: [],
    isLoading: false,

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
