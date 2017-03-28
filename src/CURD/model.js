import { observable, action, extendObservable } from 'cans/mobx'

export const model = {
  namespace: 'curd',
  observable: app => observable({
    posts: [],
    isLoading: false,

    fetch: action.bound(async function () {
      try {
        this.isLoading = true
        const res = await app.plugins.http.get('http://jsonplaceholder.typicode.com/users')
        this.posts = res.data
      } catch (e) {
        // TODO: display error
      } finally {
        this.isLoading = false
      }
    })
  })
}
