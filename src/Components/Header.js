import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>

    <div className='header_wrapper'>
        
        <div className='header_text'>
            <text className='coffee_text'>The <br /> Coffee <br /> Shop</text>
        </div>
        
        <ul className='header_item'>

            <li className='nav-item'>
                <Link to={"/"} className='nav-links'>
                    HOME
                </Link>
            </li>

            <li className='nav-item'>
                <Link to={"/"} className='nav-links'>
                    MENU
                </Link>
            </li>

            <li className='nav-item'>
                <Link to={"/"} className='nav-links'>
                    ABOUT
                </Link>
            </li>



        </ul>
        
        <div className='header-btn'>
            <button className='buy-now'>BUY NOW</button>
        </div>
    
    </div>
    
    </>
  )
}

export default Header
