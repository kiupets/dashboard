import React from 'react'
import './widget.css'

const Widget = ({ string, number, svg }) => {
    return (
        <div className='widget'>
            <div className='number'>{number}</div>
            <div className='svg-string' >
                <div>{svg}</div>
                <div>{string}</div>
            </div>
        </div>
    )
}

export default Widget
