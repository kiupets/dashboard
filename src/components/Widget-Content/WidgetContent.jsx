import React from 'react'
import './WidgetContent.css'
import { Span } from '../../components/shared/Span/Span'
export const WidgetContent = ({ string, number, icon, clase, }) => {
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
