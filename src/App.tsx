import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import './App.css'
import Home from './client/components/Home';
import UserLayout from './client/UserLayout';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
