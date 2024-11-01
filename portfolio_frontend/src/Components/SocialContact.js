import React from 'react'
import '../Assets/CSS/SocialContact.scss';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const SocialContact = () => {
  return (
    <div className='social'>
        <span className='social-icon github'>
           <Link to='https://github.com/Mountain-Michaelle' target='_blank' style={{color:'#ff3c00'}}><GitHubIcon /></Link> 
        </span>
        
        <span className='social-icon linkedln'>
            <Link to='www.linkedin.com/in/michael-chinemelu-98718126b' target='_blank' style={{color:'#ff3c00'}}> <LinkedInIcon /></Link>
        </span>

        <span className='social-icon twitter'>
          <Link to='https://x.com/Mountin_Michael' target='_blank' style={{color:'#ff3c00'}}><XIcon /></Link> 
        </span>
    </div>
  )
}


export default SocialContact