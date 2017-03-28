import React from 'react'
import { inject } from 'cans'

const CURD = inject(({ models }) => {
  return (
    <div>
      {models.curd.posts.map(post => {
        return (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
})

export default CURD
