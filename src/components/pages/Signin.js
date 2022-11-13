import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <main className="form-signin w-50 m-auto mt-5 border border-1 shadow-lg p-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="./logo512.png" alt="" width="75" height="75" />
                    </div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    Do not have an account. <Link to='/register'>Register</Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </>
    )
}

export default Signin