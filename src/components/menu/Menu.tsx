import React from 'react';
import './Menu.scss';

const Menu = (props: any) => {
    return (
        <div className="d-flex flex-column MenuContainer">
            <span className="menuTitle">Account Settings</span>
            <a className={`menuItems ${props.activeItem === "profile" ? "active" : ""}`} onClick={(e: any) => props.setActiveItem(e.target.id)} id="profile" href="/#">Profile Details</a>
            <a className={`menuItems ${props.activeItem === "order" ? "active" : ""}`} onClick={(e: any) => props.setActiveItem(e.target.id)} id="order" href="/#">Order History</a>
        </div>
    );
};

export default Menu;