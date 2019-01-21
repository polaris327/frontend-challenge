import React, { Component } from 'react';
import { Layout, Row, Col } from "antd";
import { Pie } from 'ant-design-pro/lib/Charts';

const salesPieData = [
  {
    x: '1',
    y: 4544,
  },
  {
    x: '2',
    y: 3321,
  },
  {
    x: '3',
    y: 3113,
  },
  {
    x: '4',
    y: 2341,
  },
  {
    x: '5',
    y: 1231,
  },
  {
    x: '6',
    y: 1231,
  },
];

class CustomChart extends Component {

    render() {

        return (
            <Layout>

              <Pie
                title="Portfolio"
                subTitle="Your Portfolio"
                total="$83,869.81"
                data={salesPieData}
                height={240}
              />

            </Layout>
        );
    }
}

export default CustomChart;
