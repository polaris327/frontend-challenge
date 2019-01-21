import React, { Component } from 'react';
import {Col, Layout, Row, Pagination} from "antd";
import './YourAccountStyle.scss';
import CustomTable from "../../components/tabel/Table";
import CustomChart from "../../components/chart/Chart";
import CustomProject from "../../components/project/Project";
import Functions from "../../common/Functions";

class YourAccount extends Component {
    render() {
        return (
            <Layout style={{ paddingBottom: '60px' }}>
                <Row>
                    <Col span={16} offset={2}>
                        <h1 className="pageHeading"> Portfolio </h1>
                        <Row>
                            <Col span={18}>
                                <CustomTable />
                            </Col>
                            <Col span={6}></Col>
                        </Row>
                    </Col>
                    <Col span={4} style={{ marginTop: '120px' }}>
                        <CustomChart />
                    </Col>
                </Row>

                <Row>
                    <Col span={16} offset={2}>
                        <br />
                        <Row>
                            <Col span={18}>
                                <CustomProject />
                                <div style={{
                                    display: 'flex', justifyContent: 'center', background: 'white', padding: '16px' }}>
                                    <Pagination simple defaultCurrent={1} total={50} />
                                </div>
                            </Col>
                            <Col span={6}></Col>
                        </Row>
                    </Col>
                </Row>

            </Layout>
        );
    }
}

export default YourAccount;
