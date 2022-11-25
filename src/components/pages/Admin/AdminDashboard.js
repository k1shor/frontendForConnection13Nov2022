import React from 'react'
import AdminSidebar from './AdminSidebar'
import Navbar from '../../layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
        <Navbar/>
        <div className='container-fluid d-flex'>
            <div className='sidebar w-25'>
                <AdminSidebar/>
            </div>
            <div className='main-content w-75'>
                <h3>Welcome to Admin Dashboard</h3>
            </div>
        </div>
    </>
  )
}

export default AdminDashboard