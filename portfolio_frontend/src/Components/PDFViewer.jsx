import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "../Assets/CSS/PDFViewer.scss";

const workerUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

const PDFViewer = ({ pdfUrl }) => {
  if (!pdfUrl) return null;

  return (
    <div className="pdf-viewer" style={{ height: "100vh", background: "#09000c" }}>
      <Worker workerUrl={workerUrl}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
