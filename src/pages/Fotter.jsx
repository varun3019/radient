import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

import './fotter.css'

export default function Fotter() {
  return (
    <div className='fotter'>
      <h3 className='cat'>CATEGORIES</h3>
      <ul  className='li1'>
        <li>Web Builder</li>
        <li>Hosting</li>
        <li>Data Center</li>
        <li>Robotic-Automation</li>
      </ul>
      <h3 className='con'>CONTACT</h3>
      <ul className='li2'>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms Of Service</li>
        <li>Categories</li>
        <li>About</li>
      </ul>
      <div className='unitedstates'><p>United States</p>< MdKeyboardArrowDown className='md'/></div>
    </div>
  )
}
