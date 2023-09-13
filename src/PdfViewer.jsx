import React, { useState } from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { searchPlugin } from "@react-pdf-viewer/search";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const PdfViewer = () => {
    // creating new plugin instance
    const searchPluginInstance = searchPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    
  
    return (
        <div>
            <div className="viewer">
        {/* render this if we have a pdf file */}
        
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
            <Viewer
              defaultScale={1.5}
              fileUrl="/demo.pdf"
              plugins={[searchPluginInstance, pageNavigationPluginInstance]}
            ></Viewer>
          </Worker>
        

        {/* render this if we have pdfFile state null   */}
       
      </div>
        </div>
    );
};

export default PdfViewer;