import React, { useState } from 'react'
import { DropDownItems } from '../DropDownItems/DropDownItems'
import { Tag } from '@dexma/ui-components'
import './DropDownTags.css'




export const DropDownTags = ({ tags }) => {


    const dropDownItems = tags.map(toast => {
        return (
            <DropDownItems key={toast.id}>
                <div>{toast.label}</div>
                {/* <Tag className='tag'>{toast.label}</Tag> */}
            </DropDownItems>
        )
    })

    return (
        <div className='dropdown'>
            {dropDownItems}
        </div>
    )
}


