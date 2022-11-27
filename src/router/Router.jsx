import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../views/home/Home'
import Discover from '../views/discover/Discover'
import Join from '../views/join/Join'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/discover' element={<Discover/>}></Route>
            <Route path='/join' element={<Join/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router