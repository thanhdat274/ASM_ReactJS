import { SearchOutlined } from '@ant-design/icons';
import { Input, Layout } from 'antd';
import React from 'react';

import styled from 'styled-components';
import LogoImage from '../assets/images/logo.png'

const { Header } = Layout;

const HeaderAdmin: React.FC = () => (
    <HeaderCustom>
        <Logo src={LogoImage} />
        <WrapperInput
            formAction="/tim-kiem"
            size="large"
            placeholder="Enter keyword.."
            prefix={<SearchOutlined />}
          />
    </HeaderCustom>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`
const WrapperInput = styled(Input)`
  border: none;
  border-radius: 5px;
  width: 500px;
  margin-left: 100px;
`;
export default HeaderAdmin

