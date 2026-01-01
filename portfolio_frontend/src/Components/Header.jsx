import React, { useEffect, useRef } from 'react'
import '../Assets/CSS/Header.scss';
import my from '../Assets/Statics/Images/my.png'

import Types from './Types';
import SocialContact from './SocialContact';
import gsap from "gsap";
// import { CSSRulePlugin } from "@gsap/react";


const Header = () => {
  const revealRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2, transition: '1'} });
    // let flagPole = CSSPlugin.getRule('.MuiGrid-root:before')
    
    tl.to('h2', {clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 2.2})
    .to('h1', {clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0}, "-=2")
    .to('.MuiGrid-root', {stagger: .8, opacity: .8, transform:'translateY(10%)'}, "-=1")
    .to('.items, .name', {stagger: .3, duration: .2, opacity: 1, y:0, paddingBottom:0}, "-=2")
},[])
  return (
    <div className='header' >

        <div className='my'>

        <div ref={revealRef} className='circle'>
            <img src={my} alt='Profile circle' />
        </div>
        
        <div className='my-profile'>
            <h1>
                Michael Chinemelu
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