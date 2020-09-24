import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import './Navbar.scss';

const Navbar = (props: any) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light pl-0 bg-white pt-3 mb-4">
            <div>
                <button className="navbar-toggler border-0 p-0 mr-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand text-center" href="#"><strong>Courses</strong></a>
            </div>
            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
                <div>
                    <ul className="navbar-nav nav-items d-inline-flex r-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tracks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                {props.isMobile ? <button className="btn nav-btn"> Login/Signup </button> :
                    <React.Fragment>
                        <button className="btn nav-btn mr-2">
                            <FaPhoneAlt className="m-2" size="0.8em" />Request a call back
                             </button>
                        <button className="btn btn-primary rounded-circle nav-icon text-center mr-2 ml-2">SA</button>
                    </React.Fragment>
                }
            </div>
        </nav>
    );
};

export default Navbar;