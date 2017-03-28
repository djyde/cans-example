import React from 'react'
import { inject } from 'cans'

import {
  Button,
  Table
} from 'antd'

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
    title: 'name' ,
    dataIndex: 'name'
  },
  {
    title: 'email',
    dataIndex: 'email'
  }
]

const CURD = inject(({ models }) => {
  return (
    <div>
      <Button loading={models.curd.isLoading} onClick={models.curd.fetch}>Fetch</Button>
      <Table dataSource={models.curd.posts} columns={columns} />
    </div>
  )
})

export default CURD
