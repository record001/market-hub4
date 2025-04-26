import React from 'react'
import AdminHero from '../component/AdminHero'
import AdminProductFeature from '../component/AdminProductFeature'
import { NavLink } from 'react-router-dom'

function AdminPage() {
  return (
    <div>
      <NavLink to="/products/34u8fuhre4uhjtrtrgh">All Products</NavLink> <br />
      <NavLink to="/category/34u8fuhre4uhjtrtrgh3ewd2de">All Categories</NavLink>
      <AdminHero />
      <AdminProductFeature />
    </div>
  )
}

export default AdminPage
