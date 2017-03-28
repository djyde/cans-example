import { observable, action } from 'cans/mobx'

export const counterStore = observable({
  count: 0,

  incr: action.bound(function () {
    this.count += 1
  }),

  decr: action.bound(function () {
    this.count -= 1
  })
})

export const counterModel = {
  namespace: 'counter',
  observable: counterStore
}
