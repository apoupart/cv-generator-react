import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Layout from "../layout/Layout";

function PdfWrapper() {
  const [experiences, setExperienceList] = useState([]);
  useEffect(() => {

    (async () => {
      const res = await fetch(`${import.meta.env.VITE_STRAPI_URL}experiences`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`
        }
      });
      const json = await res.json();
      setExperienceList(json?.data || []);
    }) ();
  }, []);
  return (
    <>
      <PDFViewer className="pdf-viewer">
        <Layout experiences={experiences} />
      </PDFViewer>
    </>
  );
}

export default PdfWrapper;
