import React from 'react'
import './widget.css'

const Widget = ({ string, number, icon }) => {
    return (
        <div className='widget'>
            <div className='number'>{number}</div>
            <div className='icon-string' >
                <div>{icon}</div>
                <div>{string}</div>
            </div>
        </div>
    )
}

export default Widget
