import { Button } from '@mui/material'
import React from 'react'
import '../Assets/CSS/Project.scss';
import project from '../Assets/Statics/Images/bricks.png';
import Blog from '../Assets/Statics/Images/Projects/blog.jpeg';
import { Link } from 'react-router-dom';
import projects from '../Assets/Statics/projects';

const Projects = () => {
  return (
    <div className='project' style={{background:'rgb(16 0 16)', backgroundImage: `url(${project})`, backgroundSize:'cover', 
            backgroundRepeat:'no-repeat'}}> 
        <div className='card-container'>
        {
            projects.map((project, index) => {
                return(
                    <div className='card'>
                        <img src={project.image} alt='' />
        
                        <span className='title'>{project.proj_name}</span>
        
                        <div className='btn'>
                            <Button sx={{color:'white'}} variant='outlined' ><Link style={{fontSize:'0.8rem'}} to={project.url} target='_blank'
                            rel='noopener noreferer'
                            >Visit web site</Link> </Button>

                            <Button sx={{color:'white'}} variant='outlined' ><Link style={{fontSize:'0.8rem'}} to={project.git_url} target='_blank'
                            rel='noopener noreferer'>Git Repo</Link> </Button>
                        </div>
                        
                    </div>
                )
            })
        }
     </div>
    </div>
  )
}

export default Projects