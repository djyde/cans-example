import React from 'react'
import { observer, inject } from 'cans'

const Counter = inject(({ models }) => {
  return (
    <div>
      <span>{models.counter.count}</span>
      <button onClick={models.counter.incr} >+</button>
      <button onClick={models.counter.decr}>-</button>
    </div>
  )
})

export default Counter
