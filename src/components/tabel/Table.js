import React, { Component } from 'react';
import {Layout} from "antd";
import './TableStyle.scss';
import { Table, Divider, Tag, Card, Badge, Menu, Dropdown, Icon, } from 'antd';
import Functions from '../../common/Functions';


const menu = (
    <Menu>
        <Menu.Item>
            Action 1
        </Menu.Item>
        <Menu.Item>
            Action 2
        </Menu.Item>
    </Menu>
);

function NestedTable() {
    const expandedRowRender = () => {
        const columns = [
            { title: '', dataIndex: 'name', key: 'name' },
            { title: '', dataIndex: 'pOfPortfolio', key: 'pOfPortfolio' },
            { title: '', dataIndex: 'shares', key: 'shares' },
            { title: '', dataIndex: 'positionTotal', key: 'positionTotal' }
        ];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                name: 'John Brown',
                pOfPortfolio: '32%',
                shares: '$2,000.00',
                positionTotal: '$2,000.00',
            });
        }
        return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        );
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: '% of portfolio', dataIndex: 'pOfPortfolio', key: 'pOfPortfolio' },
        { title: 'shares', dataIndex: 'shares', key: 'shares' },
        { title: 'Position total', dataIndex: 'positionTotal', key: 'positionTotal' }
    ];

    const data = [];
    for (let i = 0; i < 2; ++i) {
        data.push({
            key: i,
            name: i === 0 ? 'Real state offerings' : 'Fundrise IPO',
            pOfPortfolio: '',
            shares: '',
            positionTotal: '',
        });
    }

    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
            pagination={false}
        />
    );
}


class CustomTable extends Component {


    render() {
        const { tableHeading } = this.props;
        return (
            <Layout>
                <div>
                    <Card title="Positions" bordered={false}>
                        <NestedTable/>
                    </Card>
                </div>
            </Layout>
        );
    }
}

export default CustomTable;
