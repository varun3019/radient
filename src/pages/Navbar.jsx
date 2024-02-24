import React from 'react'
import './nav.css'
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className='nav'>
            <div className="search">
            <CiSearch className='searchicon'/>
            <input className='searchbar' type="search"  />
            <div className="categories">
              Categories
            </div>
            <div className="WebsiteBuilders">
            Website Builders
            </div>
            <div className="Todaydeals">
            Today's deals
            </div>
            </div>
    </div>
  )
}
