import React, {useState} from 'react'
import './faq.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Faq = (props) => {

  const { title, description } = props;

  const [open, setOpen] = useState(false);

  return (
    <div className="faq-container">
        <div className="faq-wrapper">
            <div className="faq-header">
              <h1>
                {title}
              </h1>
            </div>
            <div className="faq-description-container" style={{opacity: open && '1'}}>
              {
                open && 
                  <div className="faq-description">
                    <p>
                      {description}
                    </p>
                  </div>
              }
            </div>
        </div>
        <div className="faq-button">
          <button type='button' onClick={() => setOpen(!open)}>
            {
              open ? 
                <ExpandLessIcon fontSize='large'/> :
                  <ExpandMoreIcon fontSize='large'/>
            }
          </button>
        </div>
    </div>
  )
}

export default Faq