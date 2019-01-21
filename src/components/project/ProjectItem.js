import React, { Component } from 'react';
import { Layout, Card, Row, Col } from "antd";

class CustomProjectItem extends Component {
  render() {
    return (
      <Layout>
        <div style={{ padding: '5px', background: 'white' }}>
          <div>
            <img src="http://ogrencidentemiz.com/wp-content/uploads/2018/08/fancy-small-and-beautiful-houses-13-35-simple-but-house-with-roof-deck-new-design-600x450.jpg" 
              style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ padding: '5px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '0px' }}>Single Family rental</p>
            <p style={{ fontSize: '10px' }}>Los Angeles CA</p>
            <Row style={{ display: 'flex', alignItems: 'stretch' }}>
              <Col span="6" style={{ fontSize: '10px', borderRight: '1px solid' }}>Raiting</Col>
              <Col span="6" style={{ fontSize: '10px' }}>Structure</Col>
              <Col span="12" style={{ fontSize: '10px', borderLeft: '1px solid' }}>Projected Return</Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

export default CustomProjectItem;
