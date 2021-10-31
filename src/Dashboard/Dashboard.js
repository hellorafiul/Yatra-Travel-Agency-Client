import React from 'react';
import './Dashboard.css';
import { useState } from 'react';
import AddCustomPackage from './AddCustomPackage/AddCustomPackage';
import ManageAllPackage from './ManageAllPackage/ManageAllPackage';
import MyPackages from './MyPackages/MyPackages';

const Dashboard = () => {
    const [control, setControl] = useState('myPackage');

    return (
        <div className="dashboard">
            <div className="row admin-container">
                <div className="col-md-3 admin-menu">
                    <h5 className="ps-3 pt-4">Manage Dashboard</h5>
                    <div className="mt-5 ps-4">
                        <li onClick={() => setControl('myPackage')} className="admin-menu p-2">My Bookings</li>
                        <li onClick={() => setControl('addPackage')} className="admin-menu p-2">Add Custom Package</li>
                        <li onClick={() => setControl('managePackage')} className="admin-menu p-2">Manage All Package</li>
                    </div>
                </div>
                <div className="col-md-9">
                    {control === 'myPackage' && <MyPackages></MyPackages>}
                    {control === 'addPackage' && <AddCustomPackage></AddCustomPackage>}
                    {control === 'managePackage' && <ManageAllPackage></ManageAllPackage>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;