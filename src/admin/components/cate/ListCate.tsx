import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Modal, Space, Table, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CateType } from '../../../type/category';
import { listCate, remove } from '../../../api/category';
import styled from 'styled-components';


const ListCate = () => {
  const [cate, setCate] = useState<CateType[]>([])
  const columns: ColumnsType<CateType> = [
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
      render: (record: CateType) => (
        <Space size="middle">
          <Link to={`${record._id}/edit`}><button style={{ border: '0px', fontSize: '20px' }} onClick={() => console.log(`${record._id}`)} > <EditOutlined /></button></Link>
          <button style={{ border: '0px', fontSize: '20px' }} ><DeleteOutlined style={{ color: "red" }} onClick={() => { onDelete(record._id as string) }} /></button>
        </Space>
      ),
    },
  ];
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
  const onDelete = async (id: string) => {
    console.log(id);

    Modal.confirm({
      title: "Bạn có muốn xóa không?",
      onOk: async () => {
        const { data } = await remove(id);
        if (data) {
          setCate(cate.filter(item => item._id !== id));
        }
        message.success("Xóa thành công")
      },
    });
    console.log();
  };
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