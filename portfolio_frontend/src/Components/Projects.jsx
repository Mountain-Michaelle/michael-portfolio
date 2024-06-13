import { Button } from '@mui/material'
import React from 'react'
import '../Assets/CSS/Project.scss';

const Projects = () => {
  return (
    <div className='project'>
        <div className='card-container'>
        <div className='card'>
            <img src='' alt='' />
            <span className='title'>Title Site Page</span>

            <div className='btn'>
                <Button variant='outlined' color='warning'>Visit Site</Button>
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