import React from 'react'
import { inject } from 'cans'

import {
  Button,
  Table
} from 'antd'

const CURD = inject(({ models }) => {

  const columns = [
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: 'title',
      dataIndex: 'title'
    },
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'Action',
      render (value, post) {
        return (
          <span>
            <a>Edit</a>
            <span className="ant-divider" />
            <a onClick={() => { models.curd.remove(post.id) }} >Delete</a>
          </span>
        )
      }
    }
  ]

  return (
    <div>
      <Button loading={models.curd.isLoading} onClick={models.curd.fetch}>Fetch</Button>
      <Table rowKey='id' loading={models.curd.isLoading} dataSource={models.curd.posts} columns={columns} />
    </div>
  )
})

export default CURD
