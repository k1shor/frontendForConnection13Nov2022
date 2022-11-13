import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <>
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo512.png" alt="" width="75" height="75" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="fname" placeholder="first name" />
                        <label htmlFor="fname">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lname" placeholder="last name" />
                        <label htmlFor="lname">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="number" className="form-control" id="age" placeholder="age" />
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="form-floating">
                        <input type="date" className="form-control" id="dob" placeholder="date of birth" />
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className='form-floating'>
                        <div className='form-control d-flex justify-content-evenly'>
                            <div>
                                <input type='radio' id='male' name='gender' className='me-1'/><label htmlFor='male'>Male</label>
                            </div>
                            <div>
                                <input type='radio' id='female' name='gender' className='me-1'/><label htmlFor='female'>Female</label>
                            </div>
                            <div>
                                <input type='radio' id='others' name='gender' className='me-1'/><label htmlFor='others'>Others</label>
                            </div>
                        </div>
                        <label>Gender</label>
                    </div>

                    <div className='form-floating'>
                        <select className='form-control'>
                            <option>Kathmandu</option>
                            <option>Bhaktapur</option>
                            <option>Lalitpur</option>
                            <option>Pokhara</option>
                            <option>Biratnagar</option>
                        </select>
                        <label>Address</label>
                    </div>


                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="CfloatingPassword" placeholder="Password" />
                        <label htmlFor="CfloatingPassword">Confirm Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    Already have an account. <Link to='/signin'>Sign in</Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
}

export default Register