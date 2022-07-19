import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { Link, useNavigate } from "react-router-dom";
import { addPro } from "../../../api/products";
import { PlusCircleOutlined } from "@ant-design/icons";
import UploadImage from "./UploadImage";
import { listCate } from "../../../api/category";

const { TextArea } = Input
const { Option } = Select;
interface DataType {
	id: string,
	name: string
}

const AddPro: React.FC = () => {
	const navigate = useNavigate()
	const [cate, setCate] = useState<DataType[]>([])
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
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			const data = await addPro(values)
			message.success("Thêm mới thành công")
			navigate('/admin/products')
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
					Thêm mới sản phẩm
				</Typography.Title>
			</Breadcrumb>

			<Form
				initialValues={{}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
			>
				<Row gutter={16}>
					<Col span={10}>
						<Form.Item
							name="img"
							labelCol={{ span: 24 }}
							label="Hình ảnh sản phẩm"
							rules={[{ required: true, message: 'Hình ảnh sản phẩm không để trống!' }]}
						>
							<UploadImage />
						</Form.Item>
						<Form.Item
							name="desc_img"
							labelCol={{ span: 24 }}
							label="Mô tả nhỏ hình ảnh"
							rules={[{ required: true, message: 'Mô tả nhỏ hình ảnh không để trống!' }]}
						>
							<TextArea name="desc_img" />
						</Form.Item>
					</Col>
					<Col span={14}>
						<Typography.Title level={3}>Thông tin sản phẩm</Typography.Title>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không để trống!' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gíá sản phẩm không để trống!' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá khuyến mại"
									dependencies={['originalPrice']}
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Giá khuyến mại sản phẩm không để trống!' },
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue('originalPrice') <= value) {
												return Promise.reject(new Error('Giá khuyến mại phải nhỏ hơn giá gốc!'));
											} else {
												return Promise.resolve();
											}
										},
									}),
									]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>

							<Col span={12}>
								<Form.Item
									label="Danh mục"
									name="categories"
									labelCol={{ span: 24 }}
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{cate.map((item, index) => <Select.Option value={item.id} key={index + 1}>{item.name}</Select.Option>)}
									</Select>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="quantity"
									label="Số lượng"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Số lượng sản phẩm không để trống!' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="short_desc"
							labelCol={{ span: 24 }}
							label="Mô tả nhỏ sản phẩm"
							rules={[{ required: true, message: 'Mô tả nhỏ sản phẩm không để trống!' }]}
						>
							<TextArea name="short_desc" />
						</Form.Item>
						<Form.Item
							name="desc"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm không để trống!' }]}
						>
							<TextArea name="desc" />
						</Form.Item>

						<Form.Item>
							<Link to='/admin/products'><Button type="primary" htmlType="submit" style={{ marginRight: '20px' }}>Back</Button></Link>
							<Button type="primary" htmlType="submit">Thêm mới</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const Label = styled.div`
	font-size: 13px;
`
const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    border: 1px dashed gray;
    margin-bottom: 10px;
`

export default AddPro;