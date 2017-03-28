import { observable, action, extendObservable } from 'cans/mobx'

export class Store {
  constructor (app) {
    this.app = app
    this.plugins = app.plugins
    extendObservable(this, {
      posts: []
    })
    this.fetch()
  }

  applyPosts = action.bound(function (posts) {
    this.posts = posts
  })

  fetch = action.bound(async () => {
    const res = await this.plugins.http.get('http://jsonplaceholder.typicode.com/posts')
    this.applyPosts(res.data)
  })
}

export const model = {
  namespace: 'curd',
  observable: app => {
    return new Store(app)
  }
}
