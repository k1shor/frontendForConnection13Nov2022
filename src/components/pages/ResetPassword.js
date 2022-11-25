import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../api/userapi'
import Navbar from '../layout/Navbar'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const params = useParams()
    const token = params.token

    const handleSubmit = (e) => {
        e.preventDefault()
        resetPassword(token, { password })
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
                    <h3 className='text-center text-warning'>Reset Password</h3>
                    <input type={'text'} className='form-control' placeholder='enter new password here.' onChange={e => setPassword(e.target.value)} />
                    <button className='btn btn-warning form-control mt-2' onClick={handleSubmit}>Reset</button>
                </form>
            }

        </>
    )
}

export default ResetPassword