import React, { useState } from 'react'
import { resendVerification } from '../api/userapi'
import Navbar from '../layout/Navbar'

const ResendVerification = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        resendVerification({ email })
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
                    <h3 className='text-center text-warning'>Resend Verification Link</h3>
                    <input type={'email'} className='form-control' placeholder='enter your email here.' onChange={e => setEmail(e.target.value)} />
                    <button className='btn btn-warning form-control mt-2' onClick={handleSubmit}>Confirm Email</button>
                </form>
            }

        </>
    )
}

export default ResendVerification