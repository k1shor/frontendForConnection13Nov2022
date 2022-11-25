import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../../api/userapi'

const AdminSidebar = ({ category, product, order, users }) => {
    const { user } = isAuthenticated()
    const navigate = useNavigate()

    const handleSignout = () => {
        signout()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    navigate('/signin')
                }
            })
    }

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ "width": "280px" }}>
                <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className='bi bi-speedometer me-2 fs-3'></i>
                    <span>
                        Dashboard
                    </span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        {category ?
                            <Link to="/admin/categories" className="nav-link active" aria-current="page">
                                <i className='bi bi-grid me-2 fs-4'></i>
                                Categories
                            </Link>
                            :
                            <Link to="/admin/categories" className="nav-link text-white" aria-current="page">
                                <i className='bi bi-grid me-2 fs-4'></i>
                                Categories
                            </Link>

                        }
                    </li>
                    <li>

                    </li>
                    <li>
                        {order ?
                            <Link to="/admin/orders" className="nav-link active">
                                <i className='bi bi-table me-2 fs-4'></i>
                                Orders
                            </Link> :
                            <Link to="/admin/orders" className="nav-link text-white">
                                <i className='bi bi-table me-2 fs-4'></i>
                                Orders
                            </Link>
                        }
                    </li>
                    <li>
                        {
                            product ?
                                <Link to="/admin/products" className="nav-link active">
                                    <i className='bi bi-grid me-2 fs-4'></i>                            Products
                                </Link> :
                                <Link to="/admin/products" className="nav-link text-white">
                                    <i className='bi bi-grid me-2 fs-4'></i>                            Products
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            users ?
                                <Link to="/admin/users" className="nav-link active">
                                    <i className='bi bi-person-circle me-2 fs-4'></i>
                                    Users
                                </Link> :
                                <Link to="/admin/users" className="nav-link text-white">
                                    <i className='bi bi-person-circle me-2 fs-4'></i>
                                    Users
                                </Link>
                        }
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                        <i className='bi bi-person-circle fs-3 me-3' />
                        <strong>{
                            user.username
                        }</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item cursor-pointer" onClick={handleSignout} role="button">Sign out</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar