import React from 'react';
import { Row, Col, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer: React.FC = () => (
  <div style={{ padding: '10px', marginTop: '20px' }}>
    <Row gutter={16} justify="center">
      <Col>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined style={{ fontSize: '24px', color: '#1877f2' }} />
        </a>
      </Col>
      <Col>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined style={{ fontSize: '24px', color: '#1da1f2' }} />
        </a>
      </Col>
      <Col>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={{ fontSize: '24px', color: '#e1306c' }} />
        </a>
      </Col>
    </Row>
    <Divider style={{ margin: '10px 0' }} />
    <p style={{ textAlign: 'center', color: '#555' }}>© 2023 Glory Magazines. All rights reserved.</p>
  </div>
);

export default Footer;
