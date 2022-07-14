import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import ListCate from './admin/components/cate/ListCate';
import Dashboard from './admin/Dashboard';
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
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='category' element={<ListCate />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
