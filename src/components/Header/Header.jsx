import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearcForm/SearchForm'
import './Header.css'

function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title'>find your favorite book</h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minus
            illo repellat quibusdam sequi consequuntur perferendis maiores,
            placeat laboriosam, magnam veritatis culpa omnis iusto aspernatur.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
