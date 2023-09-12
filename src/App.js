import PdfViewer from './PdfViewer';
import PDF from "./demo.pdf";

function App() {
  return (
    <div className="App">
    {/* <header className="App-header">
      <h1>PDF Viewer App</h1>
    </header> */}
   <PdfViewer pdf={PDF} />
  </div>
  );
}

export default App;
