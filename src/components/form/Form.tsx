import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Form.scss';

const Form = (props: any) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState<any>("");
    const [dialCode, setDialCode] = useState("");

    const handleFirstname = (e: any) => {
        setFirstName(e.target.value)
    }

    const handleLastname = (e: any) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handleMobile = (value: any, data: any) => {
        setDialCode(data.dialCode);
        setMobile(value);
    }

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
    }

    const handleSave = (e: any) => {
        e.preventDefault();
        if (props.isMobile) {
            props.closeModal();
        } else {
            alert('Save Successful!!');
        }
        resetForm();
    }

    const isNamePatternValid = (value: any) => /^[a-zA-Z]{2,30}$/.test(value)

    const isMobilePatternValid = (value: any) => {
        if (value) {
            const rawMobileNumber = value.slice(dialCode.length);
            const mobileRegex = /^[1-9]{1}[0-9]{9}$/;
            return mobileRegex.test(rawMobileNumber);
        }
        return false;
    }

    const isEmailPatternValid = (value: any) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(value).toLowerCase());
    }

    const isSubmitValid = () => {
        return isNamePatternValid(firstName) &&
            isNamePatternValid(lastName) &&
            isMobilePatternValid(mobile) &&
            isEmailPatternValid(email);
    }

    return (
        <div className={`bg-white w-100 justify-content-center mt-4 ${props.isMobile ? "fixed-bottom rounded-top" : "d-flex flex-row"} `}>
            {
                props.isMobile ?
                    <div className="d-flex justify-content-between">
                        <strong className="m-3">Profile Details</strong>
                        <BsX className="m-3" size="1.5em" onClick={() => props.closeModal()} />
                    </div> : <></>
            }
            <div className={`d-flex flex-column p-2 ${props.isMobile ? "w-100" : ""}`}>
                <form onSubmit={handleSave}>
                    <div className={`d-flex ${props.isMobile ? "flex-column" : "flex-row"} justify-content-center`}>
                        <div className="form-group mb-0 p-2">
                            <label className="inputLabel" htmlFor="firstName">FIRST NAME</label>
                            <input type="text"
                                value={firstName}
                                onChange={e => handleFirstname(e)}
                                placeholder="Eg. Jonathan"
                                className={`form-control ${!isNamePatternValid(firstName) ? "border border-danger" : ""}`}
                                id="firstName" />
                            <small className={`text-danger ${!isNamePatternValid(firstName) ? "visible" : "invisible"}`}>Invalid First Name</small>
                        </div>
                        <div className="form-group mb-0 p-2">
                            <label className="inputLabel" htmlFor="lastName">LAST NAME</label>
                            <input type="text"
                                value={lastName}
                                onChange={e => handleLastname(e)}
                                placeholder="Eg. Smith"
                                className={`form-control ${!isNamePatternValid(lastName) ? "border border-danger" : ""}`}
                                id="lastName" />
                            <small className={`text-danger ${!isNamePatternValid(lastName) ? "visible" : "invisible"}`}>Invalid Last Name</small>
                        </div>
                    </div>
                    <div className={`d-flex ${props.isMobile ? "flex-column" : "flex-row"} justify-content-center`}>
                        <div className="form-group mb-0 p-2">
                            <label className="inputLabel" htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email"
                                value={email}
                                onChange={e => handleEmail(e)}
                                placeholder="Eg. david@gmail.com"
                                className={`form-control ${!isEmailPatternValid(email) ? "border border-danger" : ""}`}
                                id="email" />
                            <small className={`text-danger ${!isEmailPatternValid(email) ? "visible" : "invisible"}`}>Invalid Email ID</small>
                        </div>
                        <div className="form-group mb-0 p-2">
                            <label className="inputLabel" htmlFor="mobile">MOBILE NUMBER</label>
                            <PhoneInput
                                value={mobile}
                                placeholder="Enter Mobile No."
                                country={'in'}
                                onChange={(value, data) => handleMobile(value, data)}
                                containerClass={`${props.isMobile ? "w-100" : "mobileInput"} ${!isMobilePatternValid(mobile) ? "border border-danger" : ""}`}
                            />
                            <small className={`text-danger ${!isMobilePatternValid(mobile) ? "visible" : "invisible"}`}>Invalid Mobile</small>
                        </div>
                    </div>
                    <div className={`form-group p-2 pt-0 d-flex ${props.isMobile ? "flex-column-reverse justify-content-start" : "flex-row"}`}>
                        <button type="submit" disabled={!isSubmitValid()} className="btn btn-primary mainButton mr-2 mt-2">SAVE</button>
                        <button onClick={(e) => e.preventDefault()} className="btn btn-transparent text-danger text-left pl-0"><strong>Update Password</strong></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;