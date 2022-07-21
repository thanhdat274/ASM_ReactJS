import React, { useState } from "react";
import styled from "styled-components";
import { Typography, Button, Input, Upload, message } from 'antd'
import { LoadingOutlined, PlusCircleOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { upload } from "../../../api/images";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return false;
};
const UploadImage: React.FC = () => {
    const [image, setImage] = useState<any>();
    const [loading, setLoading] = useState(false);

    const handleChangeImage: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        setImage(info.file.originFileObj)
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <Container>
            <UploadWrapper>
                <div style={{ textAlign: 'center' }}>
                    <Upload
                        name="image"
                        listType="picture-card"
                        beforeUpload={beforeUpload}
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        onChange={handleChangeImage}
                        onPreview={onPreview}
                    >
                        <PlusSquareOutlined style={{ fontSize: '40px' }} />

                    </Upload>
                </div>


            </UploadWrapper>
        </Container>
    )
}

const Container = styled.div`
    
`

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: left;
`

const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px dashed gray;
`

const ImagePreview = styled.img`
    width: 100%;
`

export default UploadImage;