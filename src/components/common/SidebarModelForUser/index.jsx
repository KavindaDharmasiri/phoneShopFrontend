import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faCog,
    faEnvelope,
    faShoppingCart,
    faSignOutAlt,
    faPhone, faList
} from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './FloatingSidebar.css';

const FloatingSidebarForUser = () => {
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
                <li className="nav-item">
                    <a className="nav-link" href="/userdash">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/userbuyphone">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ordercart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/completOrder">
                        <FontAwesomeIcon icon={faList} className="icon" />
                    </a>
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

export default FloatingSidebarForUser;
