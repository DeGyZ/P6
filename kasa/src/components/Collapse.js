import React, { useState } from 'react'

export default function Collapse({titleCollapse, descriptionCollaspe}) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        if(!open) {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }
  return (
    <div className='collapse'>
        <button onClick={toggle}>
            {titleCollapse}
            {open === true ? (
                <img src="" alt="flecheEnHaut" />
            ):(
                <img src="" alt="flecheEnBas" />
            )}
        </button>
        {open && (
            <div className='descriptionCollapse'>{descriptionCollaspe}</div>
        )}
    </div>
  )
}
