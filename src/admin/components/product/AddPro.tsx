import { Button, Row, Col, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';

const AddPro: React.FC = () => {
    const { Option } = Select;
    const [form] = Form.useForm()

    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={12} offset={6}>
                <Form
                form={form}
                    name="basic"
                    labelCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="gia sản phẩm"
                        name="price"
                        rules={[{ required: true, message: 'Vui òng nhập giá!' }]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Giá khuyến mại"
                        name="sale_price"
                        rules={[{ required: true, message: 'Vui òng nhập giá khuyến mại!' }]}>

                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item 
                     label="Danh mục"
                     name="cateId"
                    >
                        <Select
                            labelInValue
                            placeholder="Vui lòng chọn danh mục"
                            style={{ width: '100%' }}
                            onChange={handleChange}
                            allowClear
                        >   
                  
                            <Option value="">Diện thoại</Option>
                            <Option value="">Laptop</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>


    );
};

export default AddPro;