import cans from 'cans'
import React from 'react'
import { BrowserRouter, Route } from 'cans/router'
import { observable, action } from 'cans/mobx'

// cans plugins
import httpPlugin from 'cans-plugin-http'

// antd
import 'antd/dist/antd.css'

import Counter from './Counter'
import { counterModel } from './Counter/model'

import CURD from './CURD'
import { model as curdModel } from './CURD/model'

const createModalPlugin = (names) => {
  return {
    namespace: 'modals',
    observable: app => {
      const stateMap = {}
      names.forEach(name => {
        stateMap[name] = observable({
          visible: false,
          confirmLoading: false,
          
          show: action.bound(function () {
            this.visible = true
          }),

          hide: action.bound(function () {
            this.visible = false
          }),

          startLoading: action.bound(function () {
            this.confirmLoading = true
          }),

          stopLoading: action.bound(function () {
            this.confirmLoading = false
          })
        })
      })
      // TODO: cannot set models
      app.models.modals = stateMap
      return stateMap
    }
  }
}

const app = cans()

app.use(httpPlugin())
app.use(createModalPlugin(['createUser']))

app.model(counterModel)
app.model(curdModel)

const route = () => (
  <BrowserRouter>
    <div>
      <Route path='/counter' component={Counter} />
      <Route path='/curd' component={CURD} />
    </div>
  </BrowserRouter>
)

app.route(route)

app.start(document.querySelector('#root'))
