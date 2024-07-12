import React, { useState } from 'react'
import '../Assets/CSS/Navbar.scss';
import { Image } from '@mui/icons-material';
import Bees from '../Assets/Statics/Images/Bees.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
     <div className='nav'>
        <div className='nav-header'>
            <div>
                <Link to='/'>
                    <span>
                   <img src={Bees} alt='DeBees' /> 
                  </span>
                  <strong>
                     De Bees 
                  </strong>
                </Link>
              
                
            </div>
        </div>

        <div className='nav-items'>
            <Link to='/my-projects'>Personal Projects</Link>
            <Link to='/resume'>Resume</Link> 
        </div>

        <div className='menu-icon'>
          <Button onClick={handleOpen} color='secondary'><MenuIcon /></Button>
        </div>

        <div className={`${isOpen ? 'menu active off': 'deactivate menu'}`} style={{color:'white'}}>
          <Link style={{color:'white'}} to='/my-projects'>Personal Projects</Link>
          <Link style={{color:'white'}} to='/resume'>Resume</Link> 

          <div className={isOpen ? 'blank' : ''} onClick={handleClose}> </div>
        </div>
    
    </div>
   
  )
}
export default Navbar;