import React, { useState } from 'react'
import { isAuthenticated } from '../../api/userapi'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'
import {add_category} from '../../api/categoriApi'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    let [category_name, setCategoryName] = useState('')
    let {token} = isAuthenticated()
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState('')
    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        add_category(token, category_name)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
        
    }
    const redirect = () => {
        if (success) {
                return navigate('/admin/categories')
        }
    }
  return (
    <>
    {redirect()}
        <Navbar/>
        <div className='container-fluid d-lg-flex'>
            <div className='sidebar w-25'>
                <AdminSidebar/>
            </div>
            <div className='main-content w-75'>
                <h3>Add Category</h3>
    {showError()}


                <form className='w-50 mt-5'>
                    <label htmlFor='category'>Category Name</label>
                    <input type={'text'} id='category' className='form-control' 
                    onChange={e=>setCategoryName(e.target.value)}/>
                    <button className='btn btn-warning w-100 mt-2'
                    onClick={handleSubmit}
                    >Add Category</button>
                </form>
            </div>
        </div>   
    </>
  )
}

export default AddCategory