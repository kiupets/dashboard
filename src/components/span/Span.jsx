import React from 'react'

const Span = (...props) => {
    return (
        <div>
            <span {...props}>props.label</span>
        </div>
    )
}

export default Span
