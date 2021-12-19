import React from 'react'
import './TableRow'

const TableRow = ({ children }) => {
    return (
        <tr className='table-row'>
            {children}
        </tr>
    )
}

export default TableRow
