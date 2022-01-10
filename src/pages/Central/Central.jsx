
import React from 'react'
import { Table } from '../../components/'
import { TableJson } from '../../components/'
import { Span } from '../../components/shared'
import { Dots } from '@dexma/ui-components'
import './Central.css'

const Central = () => {
    return (
        <div className='central'>
            <div className='header-table'>
                <Span style={{ fontSize: "18px", fontWeight: "bold" }} label='Estados por store' />
                <div className='dots'>
                    <Dots steps={3} size={2} />
                </div>
            </div>
            <Table />
        </div>
    )
}

export default Central