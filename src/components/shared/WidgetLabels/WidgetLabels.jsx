import React from 'react'
import { Span } from '..'
import './WidgetLabels.css'
export const WidgetLabels = ({ string, number, icon, clase, }) => {
    return (
        <div>
            <div className="icon-number">
                <Span className={clase ? clase : ''} style={{ marginRight: "10px" }} label={icon ? icon : ''} />
                <Span className={clase ? clase : ''} style={{ fontSize: "72px" }} label={number} />
                <Span style={{ visibility: "hidden" }} label={icon} />
            </div>
            <Span className={clase ? clase : ''} style={{ fontSize: '16px' }} label={string} />
        </div>
    )
}
