import React from 'react'
import { Table } from '../../components/'
import { Span } from '../../components/shared'
import './Central.css'

const Central = () => {
    return (
        <div className='central'>
            <Span style={{ fontSize: "18px", fontWeight: "bold", alignSelf: 'start', marginLeft: "20px", marginTop: '50px' }} label='Estados por store' />
            <Table />
        </div>
    )
}

export default Central
