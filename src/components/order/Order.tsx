import React from 'react';
import Card from '../card/Card';
import { Orders } from '../../config/orders';
import './Order.scss';

const Order = (props: any) => {
    return (
        <div className="container-fluid p-3">
            {
                Orders.map(item => {
                    return <Card isMobile={props.isMobile} itemDetail={item} />
                })
            }
        </div>
    );
};

export default Order;