import React, { Component } from 'react';
import { Menu, Input, Checkbox,Image, Button } from 'antd';
import Starrate from '../../Images/stars.svg'
import Starlow from '../../Images/starslow.svg'
import Arrow from '../../Images/arrows.svg'

const { SubMenu } = Menu;
const { Search } = Input;

class OneTitle extends Component {
    render() {
        return (
            <Checkbox>
                {this.props.title}
            </Checkbox>
        );
    }
}
class ComponentStar extends Component {
    renderStar1(){
        let arr = [1,2,3,4,5]
        let data = arr.map((val , index) =>{
            return <Image src={Starrate}/>
        })
        return data;
    }
    render() {
        return (
            <div className="rate">
                <div className="star5">
                    {this.renderStar1()}
                    <p>(Từ 5 sao)</p>
                </div>
                <div className="star4">
                <Image src={Starrate}/>
                <Image src={Starrate}/>
                <Image src={Starrate}/>
                <Image src={Starrate}/>
                <Image src={Starlow}/>
                <p>(Từ 4 sao)</p>
                </div>
                <div className="star3">
                <Image src={Starrate}/>
                <Image src={Starrate}/>
                <Image src={Starrate}/>
                <Image src={Starlow}/>
                <Image src={Starlow}/>
                <p>(Từ 3 sao)</p>
                </div>
            </div>
        );
    }
}


class Sidebar extends Component {
    renderSidebar() {
        let arrStars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 12123, 3423, 1, 1, 2, 23, 3, 1, 12, 12, 2, 23, 4, 4]
        let data = arrStars.map((val, index) => {
            let dero = index < 10 ? "0": ""
            return <OneTitle title={"Trị bệnh " + dero + index} />
        })
        return data;
    }
    render() {
        return (
            <div className="side-bar">
                <div className="one-bar">
                    <div className="title">DANH MỤC SẢN PHẨM</div>
                    <div className="search-box">
                        <Search placeholder="input search text" onSearch={value => console.log(value)} />
                    </div>
                    <div className="check" id="scroll">
                        {this.renderSidebar()}
                    </div>
                </div>
                <div className="one-bar">
                    <div className="title">DANH MỤC SẢN PHẨM</div>
                    <div className="search-box">
                        <Search placeholder="input search text" onSearch={value => console.log(value)} />
                    </div>
                    <div className="check" id="scroll">
                        {this.renderSidebar()}
                    </div>
                </div>
                <div className="one-bar">
                    <div className="title">ĐÁNH GIÁ SẢN PHẨM</div>
                    <ComponentStar/>
                </div>
                <div className="one-bar">
                    <div className="title">Giá sản phẩm</div>
                     <div className="price-sort">
                        <Button className="button-price">1.000.000</Button>
                        <Button className="button-price">9.000.000</Button>
                        <Image src={Arrow}/>
                     </div>
                </div>
                <div className="one-bar">
                    <div className="title">Sản phẩm nổi bật</div>
                     <div className="check bot">
                        <OneTitle title="Sản phẩm mới"/>
                        <OneTitle title="Sản phẩm đạt doanh số cao"/>
                        <OneTitle title="Sản phẩm đang giảm giá"/>
                     </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;