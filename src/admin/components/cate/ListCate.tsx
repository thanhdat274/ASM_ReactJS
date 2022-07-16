import { PlusOutlined } from '@ant-design/icons'
import { Button, Space, Table, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { listCate } from '../../../api/category'

interface DataType {
  id: string,
  name: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: DataType) => (
      <Space size="middle">
         <Link to={`${record.id}/edit`}><button style={{ border: '0px', fontSize: '20px' }} onClick={() => console.log(`${record.id}`)} ><BsFillPencilFill style={{ color: '#F2DF3A', fontSize: '20px' }} /></button></Link>
        <button style={{ border: '0px', fontSize: '20px' }} onClick={() => console.log('ahihi')} ><BsFillTrashFill style={{ color: 'red', fontSize: '20px' }} /></button>
      </Space>
    ),
  },
];


const ListCate = () => {
  const [cate, setCate] = useState([])
  useEffect(() => {
    const getCate = async () => {
      try {
        const data = await listCate()
        setCate(data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getCate()
  }, [])
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Danh sách danh mục
        </Typography.Title>
        <Link to="/admin/categories/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={cate} />
    </>
  )
}
const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ListCate