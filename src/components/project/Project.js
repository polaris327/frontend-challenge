import React, { Component } from 'react';
import { Layout, Card, Row, Col } from "antd";
import { Dropdown, Icon, Menu } from "antd";
import CustomProjectItem from './ProjectItem';

const menu = (
  <Menu style={{ width: '100%' }}>
      <Menu.Item key="1">1 week</Menu.Item>
      <Menu.Item key="2">2 weeks</Menu.Item>
      <Menu.Item key="3">1 month</Menu.Item>
  </Menu>
);

class CustomProject extends Component {

    renderDropdown = () => {
      return (
        <div>
          <Menu
            className="left-menu"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ border: '1px solid black' }}>
            <Menu.Item key="1" style={{ width: '100%', paddingRight: '5px' }}>
              <Dropdown overlay={menu}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Recently acquired
                    <Icon type="caret-down" style={{ marginRight: '0px' }} />
                </div>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
      )
    }

    render() {
        return (
            <Layout>
                <div>
                    <Card title="Projects" bordered={false}>
                      <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <Col span="12">
                          <p style={{ marginBottom: '0px' }}>147 active projects</p>
                        </Col>
                        <Col span="12">
                          <Row style={{ display: 'flex', alignItems: 'stretch' }}>
                            <Col span="12">
                              {this.renderDropdown()}
                            </Col>
                            <Col span="12" style={{ paddingLeft: '16px' }}>
                              <Icon type="appstore" style={{
                                fontSize: '30px', width: '49px', height: '49px', padding: '8px', border: '1px solid' }}
                                theme="outlined" />
                              <Icon type="bars" style={{
                                fontSize: '30px', width: '49px', height: '49px', padding: '8px', border: '1px solid' }}
                                theme="outlined" />
                              <Icon type="environment" style={{
                                fontSize: '30px', width: '49px', height: '49px', padding: '8px', border: '1px solid' }}
                                theme="outlined" />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col span="8" style={{ padding: '5px' }}>
                          <CustomProjectItem />
                        </Col>
                        <Col span="8" style={{ padding: '5px' }}>
                          <CustomProjectItem />
                        </Col>
                        <Col span="8" style={{ padding: '5px' }}>
                          <CustomProjectItem />
                        </Col>
                      </Row>
                    </Card>
                </div>
            </Layout>
        );
    }
}

export default CustomProject;
