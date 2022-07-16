import { Button, Checkbox, Col, Form, Input, message, Row, Select, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addCate } from '../../../api/category';

const AddCate: React.FC = () => {
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        try {
            const data = await addCate(values)
            message.success("Thêm mới thành công")
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
                    Thêm mới danh mục
                </Typography.Title>
            </Breadcrumb>
            <Row gutter={16}>
				<Col span={16}>
					<Form
						// name="product"
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
								Thêm mới
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

export default AddCate;