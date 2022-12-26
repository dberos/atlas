import React, { useState } from 'react'
import './halfDropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useCloseModal from '../../../../hooks/useCloseModal'

const HalfDropdown = (props) => {

    const [open, setOpen] = useState(false);

    const handleSelect = (str) => {
        props.setSelectedTitle(str);
        setOpen(false);
    }

    let ref = useCloseModal(() => {
        setOpen(false);
    })

  return (
    <div className="half-dropdown-container">
        <div className="half-dropdown-title">
            <h1>
                {props.title}
            </h1>
        </div>
        <div className="half-dropdown-dropdown-container">
            <div className="half-dropdown-name">
                <p>
                    {props.selectedTitle}
                </p>
            </div>
            <div className="half-dropdown-icon-container">
                <button type='button' onClick={() => setOpen(!open)}>
                    {
                        open ? 
                            <ArrowRightIcon fontSize='large'/> :
                                <ArrowDropDownIcon fontSize='large'/>
                    }
                </button>
            </div>
        </div>
        {
            open && 
                <div className="half-dropdown-dropdown" ref={ref}>
                    {
                        props.options.map((value) => {
                            return(
                                <p key={value.id} onClick={() => handleSelect(value.title)}>
                                    {value.title}
                                </p>
                            )
                        })
                    }
                </div>
        }
    </div>
  )
}

export default HalfDropdown