import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAll } from "../../../api/products";
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

interface DataType {
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: text => <p style={{width: '200px'}}>{text}</p>,
  },
  {
    title: 'Đặc điểm',
    dataIndex: 'feature',
    key: 'feature',
    render: text => <p style={{width: '500px'}}>{text}</p>,
  },
  {
    title: 'Giá khuyến mãi',
    dataIndex: 'saleOffPrice',
    key: 'saleOffPrice',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    key: 'description',
    render: text => <p style={{width: '500px'}}>{text}</p>,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <button style={{border: '0px', fontSize: '20px'}} onClick={() => console.log('ahihi')} ><BsFillTrashFill style={{color: 'red', fontSize: '20px'}}/></button>
        <button style={{border: '0px', fontSize: '20px'}} onClick={() => console.log('ahihi')} ><BsFillPencilFill style={{color: '#F2DF3A', fontSize: '20px'}}/></button>
      </Space>
    ),
  },
];



const ListPro = () => {
  const [dataTable, setDataTable] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll()
        setDataTable(data.data)
      } catch (err) {

      }
    }

    fetchData()
  }, [])
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Danh sách sản phẩm
        </Typography.Title>
        <Link to="/admin/products/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ListPro;