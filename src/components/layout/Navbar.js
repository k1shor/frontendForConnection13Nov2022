import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signout } from '../api/userapi'

const Navbar = () => {
    // let userInfo = isAuthenticated()
    // let user = userInfo.user

    let { user } = isAuthenticated()
    // console.log(user)

    const navigate = useNavigate()

    const handleSignout = () => {
        signout()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                navigate('/signin')
            }
        })
    }
    return (
        <>
            <div className='container-fluid bg-dark text-warning sticky-top'>
                <div className='row'>
                    <div className='col-md-3 text-center pt-1'>
                        <Link className="navbar-brand fs-3 fw-bold" to="/">OUR STORE</Link>
                    </div>
                    <div className='col-md-6 py-2'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-3 d-flex justify-content-evenly pt-1'>
                        {
                            !user &&
                            <>
                                <Link to="/register"><i className="bi bi-person-plus-fill fs-3 text-warning"></i></Link>
                                <Link to="/signin"><i className="bi bi-box-arrow-in-left fs-3 text-warning"></i></Link>
                            </>
                        }
                        {
                            user && user.role===0 &&
                            <>
                                <Link to='/userprofile'><i className='bi bi-person-circle fs-3 text-warning'></i></Link>
                                <Link to="/cart"><i className='bi bi-cart fs-3 text-warning'></i></Link>
                                <Link to="/"><i className='bi bi-box-arrow-right fs-3 text-warning' onClick={handleSignout}></i></Link>
                            </>
                        }
                        {
                            user && user.role===1 &&
                            <>
                                
                                <Link to="/admin/dashboard"><i className='bi bi-speedometer fs-3 text-warning'></i></Link>
                                <Link to="/" onClick={handleSignout}><i className='bi bi-box-arrow-right fs-3 text-warning'></i></Link>
                            </>
                        }

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">
                                    <span className="material-icons pt-2">
                                        home
                                    </span>
                                    Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar