import React from 'react'
import Span from '../shared/Span/Span'
import './Widget.css'

const Widget = ({ string, number, icon }) => {
    return (
        <div className='widget'>
            <div className='items'>
                <div className='icon-number'>
                    <Span classname='icon' label={icon} />
                    <Span classname='number' style={{ fontSize: '48px', fontFamily: 'SF Pro Display' }} label={number} />
                </div>
                <Span label={string} />
            </div>
            {/* <div className='practice'>
                <h1>practice</h1>
                <h1>practice</h1>
                <h1>practice</h1>
            </div> */}


        </div>
    )
}

export default Widget
