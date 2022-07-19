import React from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { Link, useNavigate } from "react-router-dom";
import { editPro } from "../../../api/products";
import { PlusCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input
const { Option } = Select;

const EditPro: React.FC = () => {
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);

		try {
			const data = await editPro(values)
			message.success("Tạo mới thành công")
			navigate(-1)
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
					Cập nhật sản phẩm
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
							{/* <Label>Hình ảnh <span style={{ color: 'red' }}>*</span></Label> */}
							<UploadWrapper >

								<Button style={{ fontSize: '50px' }} type="dashed" shape="circle" icon={<PlusCircleOutlined style={{ fontSize: '25px' }} />} />
							</UploadWrapper>
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
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía khuyến mại sản phẩm không để trống!' }]}
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
										<Option value="phone">Điện thoại</Option>
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
							<Button type="primary" htmlType="submit">Cập nhật</Button>
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

export default EditPro;