import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useEffect, useRef, useState } from "react";
import '../Assets/CSS/Project.scss';
import project from '../Assets/Statics/Images/code.png';
import { Link} from 'react-router-dom';
import projects from '../Assets/Statics/projects';
import WarningIcon from '@mui/icons-material/Warning';
import MediaCard from  './Card'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {

    const projectCardsRef = useRef([]);

    const addToProjectRefs = (el) => {
      if (el && !projectCardsRef.current.includes(el)) {
        projectCardsRef.current.push(el);
      }
    }; 
    

    const [isOpen, setIsOpen] = useState(false)
    const [link, setLink] = useState('')


    const handleToggle = (link) => {
        setIsOpen(!isOpen)
        setLink(link)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        projectCardsRef.current.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.85,
              y: 30,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      
        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }, []);
      
      
  return (
    <div className='project' style={{background:'rgb(16 0 16)', backgroundImage: `url(${project})`, backgroundSize:'cover', 
            backgroundRepeat:'no-repeat'}}> 
        <div className="card-container">
        {projects.map((project, index) => {
            return (
            <div key={index} ref={addToProjectRefs}>
                <MediaCard
                data={project}
                handleToggle={handleToggle}
                link={link}
                />
            </div>
            );
        })}
        </div>

        <Dialog open={isOpen} onClose={handleClose} aria-label='alert-dialog'>
            <DialogTitle sx={{display:'flex', margin: '0 auto'}}>
            <WarningIcon color='error' fontSize='large' />
            </DialogTitle>

            <DialogContent>
                <DialogContentText sx={{textAlign: 'center'}}>
                The site you're about to visit is in Demo Mode and may experience slow loading due to limited CPU resources. 
               
                </DialogContentText>

                <DialogContentText sx={{color:'orange', textAlign: 'center', fontSize:'0.8rem'}}>
                    We apologize for any inconvenience and appreciate your patience.
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>    
                        <Link style={{fontSize: '0.8rem', color:'#279107'}} to={link} target='_blank'>Proceed</Link>
                    </Button>

                    <Button onClick={handleClose} color='error'>Close</Button>
                </DialogActions>
                    </DialogContent>
        </Dialog>
    </div>
  )
}

export default Projects