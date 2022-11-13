import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <h2 className='ms-3 mt-3 text-info text-decoration-underline'>Deals</h2>
            <ul className='list-unstyled ms-3'>
              <Link to='#' className='text-decoration-none fw-bold fs-4'><li className='text-warning'>Deals of the day</li></Link>
              <Link to='#' className='text-decoration-none text-success fw-bold fs-4'><li>Flash Sales</li></Link>
              <Link to='#' className='text-decoration-none text-danger fw-bold fs-4'><li>Most Popular</li></Link>
            </ul>

            <h2 className='ms-3 mt-4 text-info text-decoration-underline'>Departments</h2>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexCheckDefault">
                Mobiles
              </label>
            </div>
            
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault2" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexCheckDefault2">
                Laptops
              </label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault3" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexCheckDefault3">
                Beauty
              </label>
            </div><div className="form-check ms-3">
              <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault4" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexCheckDefault4">
                Health
              </label>
            </div><div className="form-check ms-3">
              <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault5" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexCheckDefault5">
                Home
              </label>
            </div>

            <h2 className='ms-3 mt-4 text-info text-decoration-underline'>Prices</h2>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexRadioDefault1">
                Upto Rs. 1000
              </label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexRadioDefault2">
                Rs. 1000 - Rs. 10000
              </label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexRadioDefault3">
                Rs. 10000 - Rs. 50000
              </label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexRadioDefault4">
                Rs. 50000 - Rs. 100000
              </label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
              <label className="form-check-label text-secondary fw-bold fs-4" htmlFor="flexRadioDefault5">
                Above Rs. 100000
              </label>
            </div>


          </div>
          <div className='col-md-9'>
            <h2 className='ms-3 mt-3 text-info text-decoration-underline'>Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='btn btn-warning form-control'>Add to Cart</button>
                  </div>
                </div>
              </div>
              


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products