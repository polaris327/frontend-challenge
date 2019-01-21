import React from "react";
import {Divider, Tag} from "antd";

export class Functions {
    getColumnsData(){
        return [
            {
                title: 'Real estate offerings',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '',
                dataIndex: 'pOfPortfolio',
                key: 'pOfPortfolio',
            },
            {
                title: '',
                dataIndex: 'shares',
                key: 'shares',
            },
            {
                title: '',
                key: 'positionTotal',
                dataIndex: 'positionTotal'
            }
        ];
    };

    getData(){
        return [{
            key: '1',
            name: 'John Brown',
            pOfPortfolio: '32%',
            shares: '$2,000.00',
            positionTotal: '$2,000.00',
        }, {
            key: '2',
            name: 'Jim Green',
            pOfPortfolio: '32%',
            shares: '$2,000.00',
            positionTotal: '$2,000.00',
        }, {
            key: '3',
            name: 'Joe Black',
            pOfPortfolio: '32%',
            shares: '$2,000.00',
            positionTotal: '$2,000.00',
        }];
    }
}
export default new Functions();
