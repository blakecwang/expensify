import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div className='nav-link-container'>
      <NavLink activeClassName='is-active' to='/' exact={true}>Dashboard</NavLink>
      <NavLink activeClassName='is-active' to='/create'>Add Expense</NavLink>
      <NavLink activeClassName='is-active' to='/help'>Help</NavLink>
    </div>
  </header>
)

export default Header
