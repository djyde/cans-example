import React from 'react'
import {
  Modal,
  Button,
  Input,
  Form
} from 'antd'
import { extendObservable, action } from 'cans/mobx'
import { inject } from 'cans'

const UserFormModal = inject(({ models, form }) => {
  const { getFieldDecorator } = form
  return (
    <Modal 
      visible={models.modals.createUser.visible} 
      onCancel={models.modals.createUser.hide}
      onOk={models.curd.create}
      confirmLoading={models.modals.createUser.confirmLoading}
    >
      <Form>
        <Form.Item label='title'>
          {getFieldDecorator('title')(
            <Input />
          )}
        </Form.Item>

        <Form.Item label='name'>
          {getFieldDecorator('name')(
            <Input />
          )}
        </Form.Item>

        <Form.Item label='email'>
          {getFieldDecorator('email')(
            <Input />
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
})

export default Form.create()(UserFormModal)
