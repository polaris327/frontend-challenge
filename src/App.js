import React, { Component } from 'react';
import './App.scss';
import {Layout} from "antd";
import CustomHeader from "./components/header/Header";
import YourAccount from "./pages/yourAccount/YourAccount";
const {Header, Sider, Content, Footer} = Layout;
class App extends Component {
  render() {
    return (
        <Layout style={{overflow: 'auto', height: '100vh' }}>
          <CustomHeader/>
          <Layout style={{justifyContent: 'flex-start' }}>
            <Content>
              <YourAccount/>
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default App;
