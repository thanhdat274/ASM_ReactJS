import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import AddCate from './admin/components/cate/AddCate';
import ListCate from './admin/components/cate/ListCate';
import Dashboard from './admin/Dashboard';
import './App.css'
import Signin from './client/components/auth/signin';
import Home from './client/components/Home';
import UserLayout from './client/UserLayout';
import ListPro from './admin/components/product/ListPro';
import AddPro from './admin/components/product/AddPro';


function App() {
  return (
    <>
      <Routes>

        {/* phần user*/}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* phần admin */}
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='category'>
            <Route index element={<ListCate />} />
            <Route path='add' element={<AddCate />} />
          </Route>
          <Route path='products'>
            <Route index element={<ListPro />} />
            <Route path='add' element={<AddPro />} />
          </Route>
        </Route>
        {/* phần auth */}
        <Route path='signin' element={<Signin />} />
      </Routes>
    </>
  )
}

export default App
