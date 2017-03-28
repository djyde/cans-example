import cans from 'cans'
import React from 'react'
import { BrowserRouter, Route } from 'cans/router'

import Counter from './Counter'
import { counterModel } from './Counter/model'

const app = cans()

app.model(counterModel)

const route = () => (
  <BrowserRouter>
    <Route path='/counter' component={Counter} />
  </BrowserRouter>
)

app.route(route)

app.start(document.querySelector('#root'))
