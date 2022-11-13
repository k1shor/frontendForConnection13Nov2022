import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <>
    
      <div className='container my-5'>
        <table className='table table-bordered text-center align-middle table-hover'>
          <thead>
            <tr className='table-success'>
              <td>S.No.</td>
              <td>Product Image</td>
              <td>Product Information</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src='./images/img1.jpg' style={{height: "150px"}} className='cart-image'/>
              </td>
              <td>
                <h4>Acer Laptop</h4>
                <h5>Rs. 75000</h5>
                <p>i5 processor, 512 SSD, 8GB RAM</p>
              </td>
              <td>
                <div className='btn-group'>
                  <button className='btn btn-warning'>UPdate</button>
                  <button className='btn btn-danger'>Remove</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img src='./images/img1.jpg' style={{height: "150px"}}/>
              </td>
              <td>
                <h4>Acer Laptop</h4>
                <h5>Rs. 75000</h5>
                <p>i5 processor, 512 SSD, 8GB RAM</p>
              </td>
              <td>
                <div className='btn-group'>
                  <button className='btn btn-warning'>
                    <i className='bi bi-pencil'></i>
                  </button>
                  <button className='btn btn-danger'>
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img src='./images/img1.jpg' style={{height: "150px"}} className='cart-image'/>
              </td>
              <td>
                <h4>Acer Laptop</h4>
                <h5>Rs. 75000</h5>
                <p>i5 processor, 512 SSD, 8GB RAM</p>
              </td>
              <td>
                <div className='btn-group'>
                  <button className='btn btn-warning'>
                    <i className='bi bi-pencil'></i>
                  </button>
                  <button className='btn btn-danger'>
                    <i className='bi bi-trash'></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Cart