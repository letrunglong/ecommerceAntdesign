import React, { Component } from 'react';
import Logo from '../Images/logo.svg';
import { ReactComponent as PayOnline } from '../Images/pay.svg';
import IFG from '../Images/ifg.svg';
import Youtube from '../Images/youtube.svg';
import FaceBook from '../Images/facebook.svg';
import Zalo from '../Images/zalo.svg';
import Appstore from '../Images/appstore.svg';
import Chplay from '../Images/chplay.svg';
import IAIMB from '../Images/iaimb.svg';

class FooterBottom extends Component {
    render() {
        return (
            <div className="footer_bot footer">
                <div>
                    <p>HA NOI OFFICE</p>
                    <p>81 Tan Lap, Hai Ba Trung, Ha Noi</p>
                    <p>Phone: (+84) 1900-3051 (EXT: 024)</p>
                    <p>Email: hanoi@icarebase.com</p>
                </div>
                <div>
                    <p>HO CHI MINH OFFICE</p>
                    <p>60 Nguyen Dinh Chieu, Da Kao, Dist 1</p>
                    <p></p>
                    <p>Email: info@icarebase.com</p>
                </div>
                <div><img src={Logo}/></div>
                <div><img src={IFG}/></div>
                <div><img src={IAIMB}/></div>
            </div>
        );
    }
}
class Footer extends Component {
    render() {
        return (
            <div className="parent">
                <div className="back"></div>
                <div className="footer">
                    <div className="one_foot">
                        <div className="footer_title">HỖ TRỢ KHÁCH HÀNG</div>
                        <div className="footer_main">
                            <p className="red">Hotline chăm sóc khách hàng: 1900-3051</p>
                            <p>(8-21h kể cả T7, CN)</p>
                            <p>Các câu hỏi thường gặp</p>
                            <p>Gửi yêu cầu hỗ trợ</p>
                            <p>Hướng dẫn đặt hàng</p>
                            <p>Phương thước vận chuyển</p>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách hàng nhập khẩu</p>
                            <p>Hỗ trợ khách hàng: cskh@icarebase.com</p>
                        </div>
                    </div>
                    <div className="one_foot">
                        <div className="footer_title">VỀ ICB</div>
                        <div className="footer_main">
                            <p>Tuyển dụng ICB</p>
                            <p>Tuyển dụng</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách giải quyết khiếu nại</p>
                            <p>Điều khoản sử dụng</p>
                            <p>Giới thiệu ICB</p>
                            <p>Bán hàng doanh nghiệp</p>
                        </div>
                    </div>
                    <div className="one_foot">
                        <div className="footer_title">HỢP TÁC VÀ LIÊN KẾT</div>
                        <div className="footer_main">
                            <p>Quy chế hoạt động sàn GDTMĐT</p>
                            <p>Bán hàng cùng ICB</p>
                        </div>
                    </div>
                    <div className="one_foot">
                        <div className="footer_title">PHƯƠNG THỨC THANH TOÁN</div>
                        <div className="footer_main">
                            <PayOnline className="payonl" />
                        </div>
                    </div>
                    <div className="one_foot">
                        <div className="footer_title">KẾT NỐI VỚI CHÚNG TÔI</div>
                        <div className="footer_main">
                            <div className="image_social">
                                <img src={Youtube} alt="youtube" />
                                <img src={FaceBook} alt="facebook" />
                                <img src={Zalo} alt="zalo" />
                            </div>
                            <p className="bold">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</p>
                            <div><img src={Appstore} alt="appstore" /></div>
                            <img src={Chplay} alt="chplay" />
                        </div>
                    </div>
                </div>
                <FooterBottom/>
            </div>

        );
    }
}

export default Footer;