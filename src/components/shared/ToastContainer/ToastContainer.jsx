import React, { useState, useEffect } from 'react'
import { Dots } from '@dexma/ui-components';
import { Toast, Span } from '../'
import { DropDownTags } from '../DropDownTags/DropDownTags'


import './ToastContainer.css'


export const ToastContainer = () => {
    const [toasts, setToast] = useState([
        { id: 1, label: 'Text load' },
        { id: 2, label: 'Text 3' },
        { id: 3, label: 'Text toast3' },
        { id: 4, label: 'Tx' },
        { id: 5, label: 'Text' },
        { id: 6, label: 'Text toast5' },
        { id: 7, label: 'Text-typo' },
        { id: 8, label: 'carlos' },
        { id: 9, label: 'cesar' },
        { id: 10, label: 'gonzalo' },

    ])

    const [toggle, setToggle] = useState(false)
    const widgetLabels = toasts.slice(0, 5).map(toast => <Toast key={toast.id} label={toast.label} />)
    const dropdownLabels = toasts.slice(5, 10)
    // const labels = toasts.map(l => <Toast key={l.id} label={l.label} />)

    return (
        <div className='toast-widget'>
            <div className='toast-container'>
                {widgetLabels}
                <div onClick={() => setToggle(!toggle)} className='dots'>
                    {toggle ? <DropDownTags tags={dropdownLabels} /> : null}
                    <Dots steps={3} size={2} />
                </div>
            </div>
            <Span label="Tags seleccionadas" className='toast-span' />
        </div>

    )
}
