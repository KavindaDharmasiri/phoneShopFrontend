import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../../assets/img/logo.jpg";
import {
    faHome,
    faUser,
    faCog,
    faEnvelope,
    faShoppingCart,
    faSignOutAlt,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './FloatingSidebar.css';
import user_logo from "../../../assets/img/user.png";
import {style} from "../../Pages/Admin/AdminDashBoardFormat/style";

const FloatingSidebar = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownSelect = (eventKey) => {
        switch (eventKey) {
            case 'success':
                window.open('http://localhost:3000/successOrder', '_self', 'noopener,noreferrer')
                break;
            case 'pending':
                window.open('http://localhost:3000/pendingOrder', '_self', 'noopener,noreferrer')
                break;
            case 'reject':
                window.open('http://localhost:3000/rejectOrder', '_self', 'noopener,noreferrer')
                break;
            default:
                setSelectedOption(null);
        }
    };

    return (
        <div className="floating-sidebar">

            <ul className="nav flex-column nav-ul">
                <img className="imgNav" src={logo} alt=""/>
                <li className="nav-item">
                    <a className="nav-link" href="/admindash">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/managephone">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/manageuser">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                    </a>
                </li>
                <li className="nav-item btnclass">
                    <DropdownButton
                        alignRight
                        title={<FontAwesomeIcon icon={faShoppingCart} className="icon" />}
                        id="cart-dropdown"
                        onSelect={handleDropdownSelect}
                    >
                        <Dropdown.Item eventKey="success">Success</Dropdown.Item>
                        <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
                        <Dropdown.Item eventKey="reject">Reject</Dropdown.Item>
                    </DropdownButton>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FloatingSidebar;
