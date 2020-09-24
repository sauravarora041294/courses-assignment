import React from 'react';
import { BsFillPersonFill, BsChevronRight } from "react-icons/bs";
import { ImCancelCircle, ImNotification, ImCheckmark } from "react-icons/im";
import './Card.scss';

const Card = (props: any) => {

    const Status = (props: any) => {
        return (
            <React.Fragment>
                {props.itemDetail.status === "Failed" && <strong className="p-2 mr-2 text-danger"><ImCancelCircle className="mr-1" />{props.itemDetail.status}</strong>}
                {props.itemDetail.status === "Pending" && <strong className="p-2 mr-2 text-warning"><ImNotification className="mr-1" />{props.itemDetail.status}</strong>}
                {props.itemDetail.status === "Completed" && <strong className="p-2 mr-2 text-success"><ImCheckmark className="mr-1" />{props.itemDetail.status}</strong>}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {
                !props.isMobile ?
                    (<div className="card m-3">
                        <div className="d-flex flex-row justify-content-between border-bottom p-4 ">
                            <div className="cardHeader d-flex">
                                <div>
                                    <BsFillPersonFill className="cardIcon border border-secondary p-1 mr-1" size="3em" />
                                </div>
                                <div className="ml-2">
                                    <span className="d-block"><strong>{props.itemDetail.title}</strong></span>
                                    <span className="d-inline-block mr-2">Order ID: {props.itemDetail.id}</span>
                                    <span className="d-inline-block ml-2">Ordered on: {props.itemDetail.date}</span>
                                </div>
                            </div>
                            <div className="amount">
                                <s className="d-block text-secondary">Rs. {props.itemDetail.previousPrice}</s>
                                <strong>Rs. {props.itemDetail.updatedPrice}</strong>
                            </div>
                        </div>
                        <div className="cardFooter d-flex flex-row justify-content-between p-2">
                            <div className="ml-4">
                                <strong className="p-2 mr-2 text-danger">View Order Details</strong>
                                <strong className="p-2 mr-2 text-danger">Help</strong>
                                <strong className="p-2 mr-2 text-danger">Reorder</strong>
                            </div>
                            <div>
                                <Status {...props} />
                            </div>
                        </div>
                    </div>) :
                    (<div key={props.index} className="mobileCardView border mt-1 mb-3">
                        <div className="d-flex flex-row justify-content-between align-items-center m-3">
                            <div>
                                <BsFillPersonFill className="border border-secondary" size="2em" />
                                <strong className="ml-2">{props.itemDetail.title}</strong>
                            </div>
                            <BsChevronRight />
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center m-3">
                            <div>
                                <s className="text-secondary mr-2">Rs. {props.itemDetail.previousPrice}</s>
                                <strong>Rs. {props.itemDetail.updatedPrice}</strong>
                            </div>
                            <Status {...props} />
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <div className="w-100 p-1 border text-center">
                                <span className="d-block">Order ID:</span>
                                <span>{props.itemDetail.id}</span>
                            </div>
                            <div className="w-100 p-1 border text-center">
                                <span className="d-block">Order Date:</span>
                                <span>{props.itemDetail.date}</span>
                            </div>
                        </div>
                    </div>)
            }
        </React.Fragment>
    );
};

export default Card;