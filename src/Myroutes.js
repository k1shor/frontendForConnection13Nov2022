import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Axios from './components/pages/Axios'
import Cart from './components/pages/Cart'
import Contact from './components/pages/Contact'
import Count from './components/pages/Count'
import Display from './components/pages/Display'
import FetchData from './components/pages/FetchData'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import Signin from './components/pages/Signin'
import First from './First'
import Counter from './reducer/Counter'
import Games from './reducer/Games'
import Second from './Second'

const Myroutes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
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
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Myroutes