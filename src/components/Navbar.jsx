import React from 'react'
import './styles.css'
import { AiFillHome } from "react-icons/ai";
import { FaLandmark } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
        <Link className='logoLink' to='/'>
            <p className='logo'>.Yonela <span>Johannes</span></p>
        </Link>
        <div className='navlist'>
            <Link className='navlink' to="/">
                <AiFillHome className="icon" />
            </Link>
            <Link className='navlink' to="/history">
                <FaLandmark className='icon' />
            </Link>
            <Link className='navlink' to="/languages">
                <IoLanguageSharp className='icon' />
            </Link>
        </div>
    </div>
  )
}
