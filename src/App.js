import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, DatePicker, Layout, Image, Row, Col } from 'antd';
import { ReactComponent as Banner } from './Images/banner.svg';
import Sidebar from './Components/Content/Sidebar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer';
import NavBrand from './Components/NavBrand';
import Header from './Components/Header';
import '../src/css/tablet-1366px.css';
import '../src/css/tablet-768px.css';



// const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="banner">
        <Banner className="imgBanner"/>
      </div>
      <div className="container">
        <Sidebar />
        <Content />
      </div>
      <NavBrand />
      <Footer />
    </div>
  );
}

export default App;
