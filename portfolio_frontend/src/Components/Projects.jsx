import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import '../Assets/CSS/Project.scss';
import project from '../Assets/Statics/Images/code.png';
import Blog from '../Assets/Statics/Images/Projects/blog.jpeg';
import { Link, useNavigate} from 'react-router-dom';
import projects from '../Assets/Statics/projects';
import { SettingsInputComponentOutlined } from '@mui/icons-material';
import WarningIcon from '@mui/icons-material/Warning';
import MediaCard from  './Card'
const Projects = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false)
    const [link, setLink] = useState('')


    const handleToggle = (link) => {
        setIsOpen(!isOpen)
        setLink(link)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    console.log("Where you ", link)

  return (
    <div className='project' style={{background:'rgb(16 0 16)', backgroundImage: `url(${project})`, backgroundSize:'cover', 
            backgroundRepeat:'no-repeat'}}> 
        <div className='card-container'>
        {
            projects.map((project, index) => {
                return(
                    <MediaCard data={project} handleToggle={handleToggle} link={link} />
                    // <div className='card'>
                    //     <img src={project.image} alt='' />
        
                    //     <span className='title'>{project.proj_name}</span>
        
                    //     <div className='btn'>
                    //         <Button onClick={() => handleToggle(project.url)} sx={{color:'white'}} variant='outlined' >
                    //             Visit Site
                    //          </Button>
                            
                    //         <Button sx={{color:'white'}} variant='outlined' ><Link style={{fontSize:'0.8rem'}} to={project.git_url} target='_blank'
                    //         rel='noopener noreferer'>Git Repo</Link> </Button>
                    //     </div> 
                        
                    // </div>
                )
            })
        }
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