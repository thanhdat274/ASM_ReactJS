import { Button, Col, Form, Input, message, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addCate, listOneCate } from '../../../api/category';

interface DataType {
  id: string,
  name: string
}

const EditCate: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [form] = Form.useForm<DataType>();
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      const data = await addCate(values)
      message.success("Cập nhật thành công")
      navigate('/admin/categories')
    } catch (err) {
      message.error("Có lỗi xảy ra")
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Cập nhật danh mục
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={16}>
          <Form
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[{ required: true, message: 'Tên danh mục không được trống!' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`
const Label = styled.div`
	font-size: 13px;
`
export default EditCate;