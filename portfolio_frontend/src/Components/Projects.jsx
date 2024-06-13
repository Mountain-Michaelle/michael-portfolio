import { Button } from '@mui/material'
import React from 'react'
import '../Assets/CSS/Project.scss';
import project from '../Assets/Statics/Images/bricks.png';
import Blog from '../Assets/Statics/Images/Projects/blog.jpeg';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project' style={{background:'rgb(16 0 16)', backgroundImage: `url(${project})`, backgroundSize:'cover', 
    backgroundRepeat:'no-repeat'}}>
        <div className='card-container'>
        <div className='card'>
            <img src={Blog} alt='' />

            <span className='title'>Django/React Blog</span>

            <div className='btn'>
                <Button variant='outlined' color='warning'><Link style={{fontSize:'0.8rem'}} to='https://nfcsstaugustineimt.onrender.com/' target='_blank'
                rel='noopener noreferer'
                >Visit web site</Link> </Button>
            </div>
        </div>

        {/** 2nd Card */}
        <div className='card'>
            <img src='' alt='' />
            <span className='title'>Title Site Page</span>

            <div className='btn'>
                <Button variant='outlined' color='warning'>Visit Site</Button>
            </div>
        </div>

        {/** 3rd Card */}
        <div className='card'>
            <img src='' alt='' />
            <span className='title'>Title Site Page</span>

            <div className='btn'>
                <Button variant='outlined' color='warning'>Visit Site</Button>
            </div>
        </div>

        {/** 4th Card */}
        <div className='card'>
            <img src='' alt='' />
            <span className='title'>Title Site Page</span>

            <div className='btn'>
                <Button variant='outlined' color='warning'>Visit Site</Button>
            </div>
        </div>
        

        {/** 5th Card */
         <div className='card'>
         <img src='' alt='' />
         <span className='title'>Title Site Page</span>

         <div className='btn'>
             <Button variant='outlined' color='warning'>Visit Site</Button>
         </div>
     </div>}

        </div>
    </div>
  )
}

export default Projects