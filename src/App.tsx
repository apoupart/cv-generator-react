import { PDFViewer } from "@react-pdf/renderer";
import Layout from "./components/layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <h1>Voir le CV</h1>
      <PDFViewer className="pdf-viewer">
        <Layout />
      </PDFViewer>
    </>
  );
}

export default App;
