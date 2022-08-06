import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import AddCate from './admin/components/cate/AddCate';
import ListCate from './admin/components/cate/ListCate';
import Dashboard from './admin/Dashboard';
import './index.css'
import Signin from './client/components/auth/signin';
import Home from './client/components/Home';
import UserLayout from './client/UserLayout';
import ListPro from './admin/components/product/ListPro';
import AddPro from './admin/components/product/AddPro';
import ListUser from './admin/components/user/ListUser';
import AddUser from './admin/components/user/AddUser';
import EditPro from './admin/components/product/EditPro';
import EditCate from './admin/components/cate/EditCate';
import EditUSer from './admin/components/user/EditUSer';
import Signup from './client/components/auth/signup';


function App() {
  return (
    <>
      <Routes>
        {/* phần user*/}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          {/* phần auth */}
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        {/* phần admin */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Phần danh mục */}
          <Route path='categories'>
            <Route index element={<ListCate />} />
            <Route path='add' element={<AddCate />} />
            <Route path=':id/edit' element={<EditCate />} />
          </Route>
          {/* phần sản phẩm */}
          <Route path='products'>
            <Route index element={<ListPro />} />
            <Route path='add' element={<AddPro />} />
            <Route path=':id/edit' element={<EditPro />} />
          </Route>
          {/* Phần user */}
          <Route path='user'>
            <Route index element={<ListUser />} />
            <Route path='add' element={<AddUser />} />
            <Route path=':id/edit' element={<EditUSer />} />
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
