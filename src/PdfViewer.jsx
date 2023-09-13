import React, { useState,useEffect } from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { searchPlugin } from "@react-pdf-viewer/search";
// Import styles of default layout plugin
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./PdfViewer.css"

const PdfViewer = () => {
    // creating new plugin instance
    const searchPluginInstance = searchPlugin();
    const pageNavigationPluginInstance = pageNavigationPlugin();
    useEffect(() => {
        // define a custom handler function
        // for the contextmenu event
        const handleContextMenu = (e) => {
          // prevent the right-click menu from appearing
          e.preventDefault()
        }
    
        // attach the event listener to 
        // the document object
        document.addEventListener("contextmenu", handleContextMenu)
    
        // clean up the event listener when 
        // the component unmounts
        return () => {
          document.removeEventListener("contextmenu", handleContextMenu)
        }
      }, [])

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
            {/* render this if we have a pdf file */}

                <div className="pdf-container">
                    <Viewer
                        defaultScale={1.5}
                        fileUrl="/demo.pdf"
                        plugins={[searchPluginInstance, pageNavigationPluginInstance]}
                    />
                </div>
            </Worker>

       
    );
};

export default PdfViewer;