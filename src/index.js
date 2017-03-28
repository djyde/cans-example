import cans from 'cans'
import React from 'react'
import { BrowserRouter, Route } from 'cans/router'

import httpPlugin from 'cans-plugin-http'

import Counter from './Counter'
import { counterModel } from './Counter/model'

import CURD from './CURD'
import { model as curdModel } from './CURD/model'

const app = cans()

app.use(httpPlugin())

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
