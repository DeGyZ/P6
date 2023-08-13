import React, { useState } from 'react'
import arrow from "../../assets/arrow.png"

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
        <button>
            <span>{titleCollapse}</span>
            <div onClick={toggle}>
            {open === true ? (
                <img className='arrow_up' src={arrow} alt="flecheEnHaut" />
            ):(
                <img className='arrow_down' src={arrow} alt="flecheEnBas" />
            )}
            </div>
        </button>
        {open && (
            <p className='descriptionCollapse'>{descriptionCollaspe}</p>
        )}
    </div>
  )
}
