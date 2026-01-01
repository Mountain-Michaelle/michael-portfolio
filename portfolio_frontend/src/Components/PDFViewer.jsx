import React from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '../Assets/CSS/PDFViewer.scss';
const url = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;


const PDFViewer = ({pdfUrl}) => {

try{

  return (  
    <div style={{ height: '100vh', background:'#09000c'}} className='pdf-viewer'>

      <Worker workerUrl={url} style={{background:'black'}}>
        <Viewer fileUrl={pdfUrl}/>
      </Worker>

    </div>
  )
  }
catch(error){
  console.log(error)
}

}



export default PDFViewer;
