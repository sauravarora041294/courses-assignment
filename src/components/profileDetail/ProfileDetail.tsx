import React from 'react';
import { BsChevronRight, BsFillPersonFill } from 'react-icons/bs';

const ProfileDetail = (props: any) => {
    return (
        <div data-toggle="modal" onClick={() => props.setIsModalOpen(true)} className="d-flex flex-row p-2 mt-3 mb-4 justify-content-between align-items-center">
            <div className="d-flex flex-row">
                <div>
                    <BsFillPersonFill size="1em" className="float-left m-1" />
                </div>
                <div>
                    <span className="">Profile Details:</span>
                    <span className="d-block text-muted">Personal Info, Change Password</span>
                </div>
            </div>
            <BsChevronRight />
        </div>
    );
};

export default ProfileDetail;