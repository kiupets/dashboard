import React from 'react'
import './DropDownItems.css'

export const DropDownItems = ({ children }) => {
  return (
    <div className='menu-item'>
      {children}
    </div>
  )
};