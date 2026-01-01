import React, { useEffect, useRef } from "react";
import '../Assets/CSS/Home.scss';
import skills from '../Assets/Statics/skills.js';
import { Box, Grid, Typography } from '@mui/material';
import Web from '../Assets/Statics/Images/web.png';
import Graphics from '../Assets/Statics/Images/graphics.png';
import Data from '../Assets/Statics/Images/Data.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  const html = `<p style="text-align:justify">I am&nbsp;<strong><span data-darkreader-inline-color="" style="--darkreader-inline-color:var(--darkreader-text-f39c12, #ffcd3b); color:#f39c12">Michael Chinemelu</span>,</strong>&nbsp;a full-stack developer with a strong focus on building scalable, user-centric digital solutions. My work is driven by a deep interest in innovation, particularly at the intersection of technology and modern business trends.</p>

  <p style="text-align:justify">I primarily work with&nbsp;<strong><span data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor:var(--darkreader-background-f39c12, #e29110); background-color:#f39c12">Django (DRF)</span>, <span data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor:var(--darkreader-background-f39c12, #e29110); background-color:#f39c12">FastAPI</span>,&nbsp;</strong>and modern frontend frameworks such as&nbsp;<strong><span><span><span data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor:var(--darkreader-background-f39c12, #e29110); background-color:#f39c12">React</span></span></span>, <span data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor:var(--darkreader-background-f39c12, #e29110); background-color:#f39c12">Vue</span>, and <span data-darkreader-inline-bgcolor="" style="--darkreader-inline-bgcolor:var(--darkreader-background-f39c12, #e29110); background-color:#f39c12">Next.js</span> </strong> , allowing me to deliver robust backend systems alongside intuitive, high-performance user interfaces.</p>
  
  <hr />
  <p style="text-align:justify">I hold a degree in<span data-darkreader-inline-color="" style="--darkreader-inline-color:var(--darkreader-text-f39c12, #ffcd3b); color:#f39c12"> Computer Science</span> from&nbsp;<strong>the<span data-darkreader-inline-color="" style="--darkreader-inline-color:var(--darkreader-text-f39c12, #ffcd3b); color:#f39c12"> University of Nigeria, Nsukka</span> </strong> . I am passionate about leveraging technology to solve real-world problems.&nbsp;</p>
  `
  const serviceCardsRef = useRef([]);
  serviceCardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };



  useEffect(() => {
    gsap.fromTo(
      serviceCardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".service-section",
          start: "top 100%",
          once: true, // reveal once (production friendly)
        },
      }
    );
  }, []);
  
 
  return (
    <div className='home'>
        <div className='home-section'>
          <h2 className="h2">Fullstack Developer</h2>
          <Box sx={{ padding:'0.5rem', textAlign:'justify'}}>
          <Typography
            component="div"
            variant="body2"
            style={{ transform: "scaleY(100%)", lineHeight:"1.8rem" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          </Box>
        </div>

        <div className='home-section'>
          <h2 className="h2">Skills</h2>

          <Box sx={{display:'flex'}}>
            {
              skills.map((skill, index) => {
                return(
                  <Grid key={index} sx={{padding: '10px',
                    background:'#140014', margin:'0.5rem'}}
                    xs={12} sm={6}
                    className='skills'>
                    <span className='items'><img src={skill.Image} alt='' width='50px'/></span>
                    <span className='items name'>{skill.Name}</span>
                    
                  </Grid> 
                )
             
              })
            }
          </Box>
        </div>

    <div className="service-section ">
      <h2 className="h2" style={{ color: "rgb(229 174 255)" }}>
      Services
      </h2>

      <Box sx={{ display: "flex" }}>
      <div className="boxes" ref={addToRefs}>
        <img src={Web} alt="web design" />
        <span className="txt">Web Design</span>
      </div>

      <div className="boxes" ref={addToRefs}>
        <img src={Graphics} alt="Graphic design" />
        <span className="txt">Graphic Design</span>
      </div>

      <div className="boxes" ref={addToRefs}>
        <img src={Data} alt="" />
        <span className="txt">Data Analysis</span>
      </div>
      </Box>
    </div>

    </div>
  )
}

export default Home