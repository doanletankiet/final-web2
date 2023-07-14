'use client'

import { Layout, Typography, Divider, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterHome = () => {
  return (
    <Layout>
      {/* Nội dung trang */}
      <Layout.Content>
        {/* Nội dung trang */}
      </Layout.Content>

      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        <Typography.Text strong>Thông tin công ty</Typography.Text>
        <Divider />
        <Space direction="vertical">
          <Typography.Text>Địa chỉ công ty: 123 Đường ABC, Thành phố XYZ</Typography.Text>
          <Typography.Text>Số điện thoại: 0123456789</Typography.Text>
        </Space>
        <Divider />
        <Space>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={{ fontSize: '24px' }} />
          </a>
        </Space>
        <Divider />
        <Space>
          <Typography.Text>Chính sách 1</Typography.Text>
          <Typography.Text>Chính sách 2</Typography.Text>
          <Typography.Text>Chính sách 3</Typography.Text>
        </Space>
      </Footer>
    </Layout>
  );
};

export default FooterHome;