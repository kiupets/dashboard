import React from 'react'


export const Link = ({ href, label }) => {
    return (
        <div>
            <a href={href}>{label}</a>
        </div>
    )
}
