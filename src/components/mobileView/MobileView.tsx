import React, { useState } from 'react';
import { ImCancelCircle, ImNotification, ImCheckmark } from 'react-icons/im';
import { BsFillPersonFill, BsChevronRight } from 'react-icons/bs';
import { Modal } from 'react-bootstrap'
import { Orders } from '../../config/orders';
import ProfileDetail from '../profileDetail/ProfileDetail';
import Form from '../form/Form';
import Card from '../card/Card';

const MobileView = (props: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mobileViewContainer">

            <strong>Account Settings</strong>
            <ProfileDetail setIsModalOpen={(status: boolean) => setIsModalOpen(status)} />

            <strong>Order History</strong>
            <div className="mobileListView">
                {
                    Orders.map((item, index) =>
                        <Card isMobile={props.isMobile} itemDetail={item} index={index} />
                    )}
            </div>

            <Modal show={isModalOpen} aria-labelledby="ModalHeader">
                <Form isMobile={props.isMobile} closeModal={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default MobileView;