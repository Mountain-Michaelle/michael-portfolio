import React, { useState } from 'react'
import '../Assets/CSS/Navbar.scss';
import Bees from '../Assets/Statics/Images/Bees.png';
import { Link,  useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import navItems from '../Assets/Statics/navItems'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => setIsOpen(false);

  const handleClose = () => {
    setIsOpen(false)
  }

  const scrollToContact = (link) => {
    closeMenu();

    // If already on home page
    if (link?.includes("#") && location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
      return
    }
    if (link?.includes("#") && location.pathname != "/" ){
      // Navigate first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
      return 
    }

    navigate(link)
  };

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
            {
              navItems.map((item, index) => (
                <Button id={index} onClick={() => scrollToContact(item.link)}>{item.Name}</Button>
              ) )
            }
        </div>

        <div className='menu-icon'>
          <Button onClick={handleOpen} color='secondary'><MenuIcon /></Button>
        </div>

        <div className={`${isOpen ? 'menu active off': 'deactivate menu'}`} style={{color:'white'}}>
            {
              navItems.map((item, index) => (
                <Button id={index} onClick={() => scrollToContact(item.link)}>{item.Name}</Button>
              ) )
            }

          <div className={isOpen ? 'blank' : ''} onClick={handleClose}> </div>
        </div>
    
    </div>
   
  )
}
export default Navbar;