import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import AddCategory from './components/pages/Admin/AddCategory'
import AdminDashboard from './components/pages/Admin/AdminDashboard'
import Categories from './components/pages/Admin/Categories'
import CategoryUpdate from './components/pages/Admin/CategoryUpdate'
import Axios from './components/pages/Axios'
import Cart from './components/pages/Cart'
import Confirmation from './components/pages/Confirmation'
import Contact from './components/pages/Contact'
import Count from './components/pages/Count'
import Display from './components/pages/Display'
import FetchData from './components/pages/FetchData'
import ForgetPassword from './components/pages/ForgetPassword'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import ResendVerification from './components/pages/ResendVerification'
import ResetPassword from './components/pages/ResetPassword'
import Signin from './components/pages/Signin'
import First from './First'
import Counter from './reducer/Counter'
import Games from './reducer/Games'
import Second from './Second'

const Myroutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                
                <Route path='/first' element={<First />} />
                <Route path='/second' element={<Second />} />


                {/* hooks  */}
                <Route path='/count' element={<Count/>}/>
                <Route path='/display' element={<Display/>}/>
                <Route path='/fetchdata' element= {<FetchData/>}/>
                <Route path='/axios' element= {<Axios/>}/>

                {/* redux */}
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/game' element={<Games/>}/>


                <Route path= '/emailconfirmation/:token' element={<Confirmation/>}/>
                <Route path= '/forgetpassword' element={<ForgetPassword/>}/>
                <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
                <Route path='/resendverification' element={<ResendVerification/>}/>


                {/* Admin */}
                <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
                <Route path='/admin/categories' element={<Categories/>}/>
                <Route path='/admin/category/add' element={<AddCategory/>}/>
                <Route path='/admin/category/update/:id' element={<CategoryUpdate/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Myroutes