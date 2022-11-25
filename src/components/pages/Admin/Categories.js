import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../api/categoriApi'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'

const Categories = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getAllCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategory(data)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Navbar />
            <div className='container-fluid d-flex'>
                <div className='sidebar w-25'>
                    <AdminSidebar category />
                </div>
                <div className='main-content w-75'>
                    <div className='d-flex justify-content-between'>
                    <h3>Categories</h3>
<Link to='/admin/category/add' className='btn btn-warning'>Add New Category</Link>
                    </div>
                    <table className='table table-hover text-center table-bordered align-middle'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th>S.No.</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            category.map((cat,i)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{cat.Category_name}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <Link to = {`/admin/category/update/${cat._id}`} className='btn btn-warning'><i className='bi bi-pencil'></i></Link>
                                            <button className='btn btn-danger'><i className='bi bi-trash'/></button>
                                        </div>
                                    </td>
                                </tr>
                                
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Categories