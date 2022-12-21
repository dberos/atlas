import React from 'react'
import './breadcrumb.css'
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {

  return (
    <div className="breadcrumb-container">
        {
            props.links.map((value) => {
                return(
                    value.pageLink ?
                        <div className='breadcrumb-breadcrumb' key={value.id}>
                            <Link to={value.pageLink}>
                                {value.pageName}
                            </Link>
                            <p style={{color: '#81AFDD'}}>
                                ›
                            </p>
                        </div> :
                        <div className='breadcrumb-breadcrumb' key={value.id}>
                            <p>
                                {value.pageName}
                            </p>
                        </div>
                        
                )
            })
        }
    </div>
  )
}

export default Breadcrumb