import React from 'react'
import './Container.css'
import Widget from '../widget/Widget'
import Dot from '../shared/Dot/Dot'

const widgetData = [
    { number: '123', string: '1dashboard', icon: <Dot style={{ backgroundColor: 'red' }} /> },
    { number: '123', string: '1dashboard', icon: <Dot style={{ backgroundColor: 'green' }} /> },
    { number: '123', string: '1dashboard' },
    { number: '123', string: '1dashboard' },
    { number: '123', string: '1dashboard' },
    { number: '123', string: '1dashboard' },
]
const widgets = widgetData.map(w => <Widget number={w.number} string={w.string} icon={w.icon} />)

const Container = () => {
    return (
        <div className='container'>
            {widgets}
        </div>
    )
}

export default Container
