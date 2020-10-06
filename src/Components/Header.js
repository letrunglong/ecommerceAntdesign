import React, { Component} from 'react';
import ReactLogo  from '../Images/logo.svg';
import { ReactComponent as CartLogo } from '../Images/cart.svg';
import { ReactComponent as LoginImage } from '../Images/login.svg';
import { Image, Row, Col, Input, Typography } from 'antd';

const {Search} = Input
class Header extends Component {
    render() {
        return (
            <div className="nav">
                <div className="image">
                    <Image src={ReactLogo} alt="logo" />
                </div>
                <div className="search-box">
                    <Search className="search" placeholder="input search text" enterButton />
                </div>
                <div className="new">
                    <a href="#">ICB NEWS</a>
                </div>
                <div className="cart">
                    <CartLogo className="cartlogo" />
                    <p>Vào giỏ hàng</p>
                </div>
                <div className="log">
                    <LoginImage className="imgLogin" />
                    <p>Đăng ký/Đăng nhập</p>
                </div>
            </div>
        );
    }
}
export default Header;