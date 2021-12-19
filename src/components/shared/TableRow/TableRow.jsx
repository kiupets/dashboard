import React from 'react'
import './TableRow'

export const TableRow = ({ children }) => {
    return (
        <tr className='table-row'>
            {children}
        </tr>
    )
}

