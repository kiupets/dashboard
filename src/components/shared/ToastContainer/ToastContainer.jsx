import React from 'react'
import { Toast } from '../Toast/Toast'
import './ToastContainer.css'


export const ToastContainer = () => {
    const fakeData = [
        { id: 1, label: 'Text load' },
        { id: 2, label: 'Text 3' },
        { id: 3, label: 'Text toast3' },
        { id: 4, label: 'Tx' },
        { id: 5, label: 'Text toast5' },
    ];
    const labels = fakeData.map(l => <Toast key={l.id} label={l.label} />)
    return (
        <div className='toast-container'>
            {labels}
        </div>
    )
}
