import React, { Component } from 'react';
import { Image, Row, Col, Input, Typography } from 'antd';
import Logo from '../Images/logo.svg'
import Cart from '../Images/cart.svg'
import Login from '../Images/login.svg'
import Title from 'antd/lib/skeleton/Title';
import { ReactComponent as Banner } from '../Images/banner.svg';
const { Search } = Input;
class Head extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <Image src={Logo} />
                    <div className="search-box">
                    <Search className="search" placeholder="input search text" enterButton />
                    </div>
                </div>
                <div className="news">
                    NEWS
                </div>
                <div className="cart"  style={{display:"flex"}}>
                    <Image src={Cart} alt="" />
                    <p>Giỏ hàng</p>
                </div>
                <div className="account" style={{display:"flex"}}>
                    <Image src={Login} alt="" />
                    <p>Đăng ký/Đăng nhập</p>
                </div>
            </div>
        );
    }
}

export default Head;