import React from 'react'
import Span from '../shared/Span/Span'
import './Widget.css'

const Widget = ({ string, number, icon }) => {
    return (
        <div className='widget'>
            <div className='items'>
                <div className='icon-number'>
                    <Span label={icon ? icon : "hello"} />
                    <Span style={{ fontSize: '48px' }} label={number} />
                    <Span style={{ visibility: 'hidden' }} label={icon} />
                </div>
                <Span label={string} />
            </div>
        </div>
    )
}

export default Widget
