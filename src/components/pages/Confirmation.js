import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { emailConfirmation } from '../api/userapi'

const Confirmation = () => {
    const params = useParams()
    const token = params.token
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        emailConfirmation(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(data.message)
            }
        })
        .catch(error=>console.log(error))
    },[])

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}
            <Link to = '/signin'>Login</Link> to continue.</div>
        }
    }

  return (
    <>
    {showError()}
    {showSuccess()}
    </>
  )
}

export default Confirmation