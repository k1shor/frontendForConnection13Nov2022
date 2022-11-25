import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/userapi'
import Navbar from '../layout/Navbar'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    // const [user,setUser] = useState({
    //     username:'',
    //     email:'',
    //     password:''
    // })

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username, email, password }
        register(user)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                } else {
                    setError('')
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setSuccess(true)
                }
            })
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>User created Successfully. Verification link has been sent to your email. </div>
        }
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    return (
        <>
        <Navbar/>
            {showSuccess()}
            {showError()}
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo512.png" alt="" width="75" height="75" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="fname" placeholder="first name" value={username} onChange={(e) => {
                            return setUsername(e.target.value)
                        }} />
                        <label htmlFor="fname">Username</label>
                    </div>
                    {/* <div className="form-floating">
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
                    </div> */}


                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value = {email} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                        {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setUser({...user, password: e.target.value})}/> */}
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {/* <div className="form-floating">
                        <input type="password" className="form-control" id="CfloatingPassword" placeholder="Password" />
                        <label htmlFor="CfloatingPassword">Confirm Password</label>
                    </div> */}

                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                        </label>
                    </div> */}
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                    Already have an account. <Link to='/signin'>Sign in</Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
}

export default Register