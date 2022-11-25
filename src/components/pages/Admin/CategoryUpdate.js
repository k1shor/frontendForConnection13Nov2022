import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryDetails, updateCategory } from '../../api/categoriApi'
import { isAuthenticated } from '../../api/userapi'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const CategoryUpdate = () => {
    let [category_name, setCategoryName] = useState('')
    let [new_category_name, setNewCategoryName] = useState('')
    let {token} = isAuthenticated()
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState('')
    let navigate = useNavigate()
    let params = useParams()
    let category_id = params.id

    useEffect(()=>{
        categoryDetails(category_id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data)
                setCategoryName(data.Category_name)
            }
        })
    },[])

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

    const handleUpdate = (e) => {
        e.preventDefault()
        updateCategory(token, category_id, new_category_name)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
            }
        })
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
                    <label htmlFor='category'>Old Category Name: &nbsp;&nbsp;</label>
                    <span className='h4'>{category_name}</span>
                    <br/>
                    {/* <input type={'text'} className='form-control' value={category_name} disabled/> */}
                    <label htmlFor='category'>New Category Name</label>
                    <input type={'text'} id='category' className='form-control' 
                    onChange={e=>setNewCategoryName(e.target.value)}/>
                    <button className='btn btn-warning w-100 mt-2'
                    onClick={handleUpdate}
                    >Update Category</button>
                </form>
            </div>
        </div>   
    </>
  )
}

export default CategoryUpdate