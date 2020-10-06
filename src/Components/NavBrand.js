import React, { Component } from 'react';
import { Menu, Input, Checkbox,Image, Button } from 'antd';
import Clinic from '../Images/Logo/clinic.svg';
import Siri from '../Images/Logo/sri.svg';
import ReViva from '../Images/Logo/reviva.svg';
import Senior from '../Images/Logo/senior.svg';
import Lab from '../Images/Logo/lab.svg';
import Ita from '../Images/Logo/ita.svg';
import Arrow from '../Images/arrowleft.svg';


class NavBrand extends Component {
    render() {
        return (
            <div className="nav_brand">
                <div className="brand_list">
                    <Image src={Arrow} className="side _01" />
                    <Image src={Clinic}/>
                    <Image src={Siri} alt="sri" />
                    <Image src={ReViva} />
                    <Image src={Senior} />
                    <Image src={Lab} />
                    <Image src={Ita} />
                    <Image src={Arrow} className="side _02" />
                </div>
            </div>
        );
    }
}

export default NavBrand;