import React, { Component } from 'react';
import { Pagination,Image,Button } from 'antd';
import Aspirin  from '../../Images/aspirin.svg';
import { ReactComponent as StarRate } from '../../Images/stars.svg';
 class OneProduct extends Component {
    renderStars() {
        let arrStars = [1, 2, 3, 4, 5]
        let data = arrStars.map((val, index) => {
            
            return <StarRate class="star op" />
        })
        return data;
    }
     render() {
         return (
             <div className={this.props.class}>
                 <Image src={Aspirin}/>
                <div className="aspirin-rate">
                    {
                        this.renderStars()
                    }
                </div>
                <div className="aspirin-title">Nhãn hiệu thuốc 01</div>
                <div className="aspirin-price">
                    <p className="price1">150</p>
                    <p className="price2">100 ICB</p>
                </div>
                <button className="aspirin-button"><span>Thêm vào giỏ hàng</span></button>
             </div>
         );
     }
 }
 
class Content extends Component {
    renderItems() {
        let arrProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let data = arrProduct.map((val, index) => {
            let isTop = index < 4 ? "top" : "";
            return <OneProduct class={'one-product ' + isTop}/>
        })
        return data;
    }
    render() {
        return (
            <div className="content-primary">
                <div className="primary">
                    {this.renderItems()}
                </div>
                <div className="pagination">
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        );
    }
}

export default Content;