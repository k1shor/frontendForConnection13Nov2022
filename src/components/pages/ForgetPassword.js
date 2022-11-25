import React, { useState } from 'react'
import { forgetPassword } from '../api/userapi'
import Navbar from '../layout/Navbar'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        forgetPassword({ email })
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(data.message)
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            {
                !success &&
                <form className='w-50 m-auto my-5 shadow-lg p-5'>
                    <h3 className='text-center text-warning'>Forget Password</h3>
                    <input type={'email'} className='form-control' placeholder='enter your email here.' onChange={e => setEmail(e.target.value)} />
                    <button className='btn btn-warning form-control mt-2' onClick={handleSubmit}>Send Password reset link</button>
                </form>
            }

        </>
    )
}

export default ForgetPassword