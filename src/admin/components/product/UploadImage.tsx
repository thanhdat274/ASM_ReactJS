import React from "react";
import styled from "styled-components";
import {Typography, Button, Input} from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';

const {TextArea} = Input

const UploadImage = () => {
    return (
        <Container>
            <Label>Hình ảnh <span style={{color: 'red'}}>*</span></Label>
            <UploadWrapper >
                <Button style={{fontSize: '50px'}} type="dashed" shape="circle" icon={<PlusCircleOutlined style={{fontSize: '25px'}} />} />
            </UploadWrapper>
            <Label>Mô tả ngắn <span style={{color: 'red'}}>*</span></Label>
            <TextArea rows={4} placeholder="Mô tả ngắn"/>
        </Container>
    )
}

const Container = styled.div`
    
`

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: left;
    margin-bottom: 10px;
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

export default UploadImage;