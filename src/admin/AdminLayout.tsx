import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuAdmin from './MenuAdmin'

const AdminLayout = () => {
  return (
    <div>
        <MenuAdmin/>
    </div>
  )
}

export default AdminLayout