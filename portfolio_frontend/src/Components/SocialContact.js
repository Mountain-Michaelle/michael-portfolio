import React from 'react'
import '../Assets/CSS/SocialContact.scss';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialContact = () => {
  return (
    <div className='social'>
        <span className='social-icon github'>
            <GitHubIcon />
        </span>
        
        <span className='social-icon linkedln'>
            <LinkedInIcon />
        </span>

        <span className='social-icon whatsapp'>
            <WhatsAppIcon />
        </span>

        <span className='social-icon twitter'>
            <XIcon />
        </span>
    </div>
  )
}

export default SocialContact