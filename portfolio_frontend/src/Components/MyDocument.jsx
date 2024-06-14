import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import {pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';

const PDFViewer = ({pdfUrl}) => {
  return (
    <div style={{ height: '100vh', background:'#09000c'}}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`} style={{background:'black'}}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  )
}

export default PDFViewer