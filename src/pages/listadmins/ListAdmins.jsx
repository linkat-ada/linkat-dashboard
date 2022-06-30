import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const ListAdmins = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
            </div>
        </div>
    );
}

export default ListAdmins;
