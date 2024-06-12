import React from 'react'
import ReactPDF from '@react-pdf/renderer';
import PDFViewer from './MyDocument';
import pdfUrl from '../Assets/Statics/Resume.pdf'
import { Box, Button } from '@mui/material';

const Resume = () => {
    const handleDownload = () => {
        const validate = window.confirm("Continue Downloading?")

        if(validate){
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'MichaelChinemeluResume.pdf';

            // Append the anchor to the body
            document.body.appendChild(link);

            link.click()


            //Remove the anchor from the body
            document.body.removeChild(link)
        }
    }
    return(
        <div className='resume' style={{background:'#09000c'}}>
            <h2>Resume</h2>
            <PDFViewer pdfUrl={pdfUrl} />
            <Box sx={{ display: 'flex', justifyContent:'center', }}>

                <Button onClick={handleDownload} variant='outlined' sx={{color:'orange', margin: '1rem', padding: '5px'}}>Download Resume</Button>
            </Box>
           
        </div>
    )
}

export default Resume