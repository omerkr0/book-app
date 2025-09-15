import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleNavbar = () => setToggleMenu(!toggleMenu)
  const closeNavbar = () => setToggleMenu(false)

  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to='/' className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1'>book</span>
          </Link>
          <button
            type='button'
            className='navbar-toggler-btn'
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? '#fff' : '#010101'}`
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? 'navbar-collapse show-navbar-collapse'
              : 'navbar-collapse'
          }
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                to='/book'
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-uppercase text-white fs-22 fw-6 ls-1 ${
                    isActive ? 'active' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                onClick={closeNavbar}
                className={({ isActive }) =>
                  `nav-link text-uppercase text-white fs-22 fw-6 ls-1 ${
                    isActive ? 'active' : ''
                  }`
                }
              >
                about
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
