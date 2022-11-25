import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signin } from '../api/userapi'
import Navbar from '../layout/Navbar'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleSignin = e => {
        e.preventDefault()
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    authenticate(data)
                    setSuccess(true)
                }
            })
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error} <Link to = '/resendverification'>Resend Verification link.</Link></div>
        }
        
    }
    const redirect = () => {
        if (success) {
            if(isAuthenticated() && isAuthenticated().user.role === 1){
                return navigate('/admin/dashboard')
            }
            else{
                return navigate('/')
            }
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {redirect()}
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo512.png" alt="" width="75" height="75" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSignin}>Sign in</button>
                    <div className='d-flex justify-content-between'>
                        <div>
                            Do not have an account. 
                            <Link to='/register'>Register</Link>
                        </div>
                        <Link to='/forgetpassword'>Forget Password</Link>
                    </div>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
}

export default Signin