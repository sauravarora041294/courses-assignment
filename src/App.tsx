import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';
import Order from './components/order/Order';
import useViewport from './hooks/useViewPort';
import { BsFillPersonFill, BsChevronRight } from 'react-icons/bs';
import { Modal } from 'react-bootstrap'
import { Orders } from './config/orders';
import './App.css';
import { ImCancelCircle, ImNotification, ImCheckmark } from 'react-icons/im';
import MobileView from './components/mobileView/MobileView';

const App = () => {
  const [activeItem, setActiveItem] = useState("profile");
  const { width } = useViewport();
  const breakpoint = 620;
  const isMobile = width <= breakpoint;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <Navbar isMobile={isMobile} />
      {!isMobile ?
        (<div className="d-flex align-items-stretch mt-2">
          <Menu isMobile={isMobile} activeItem={activeItem} setActiveItem={(item: string) => setActiveItem(item)} />
          {activeItem === "profile" ? <Form isMobile={isMobile} /> : <></>}
          {activeItem === "order" ? <Order isMobile={isMobile} /> : <></>}
        </div>) :
        <MobileView isMobile={isMobile} />
      }
    </div>
  );
}

export default App;
