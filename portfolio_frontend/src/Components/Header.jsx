import React from 'react'
import '../Assets/CSS/Header.scss';
import my from '../Assets/Statics/Images/my.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Types from './Types';
import SocialContact from './SocialContact';
const Header = () => {
  return (
    <div className='header'>

        <div className='my'>

        <div className='circle'>
            <img src={my} alt='Profile Picture' />
        </div>
        
        <div className='my-profile'>
            <h1>
                Ugwu Michael Chinemelu
            </h1>
            <div className='bg'>
                <span className='txt'>
                    <Types />
                </span>
            </div>
            
        </div>
        
        </div>

        <div style={{ position: 'absolute', right:0, bottom:0}}>
          <SocialContact />  
        </div>
    </div>
  )
}

export default Header