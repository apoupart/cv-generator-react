import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Layout from "../layout/Layout";
import {
  IContactInformation,
  IExperiencesList,
  IScholarshipList,
} from "../../interface/api-element";

function PdfWrapper() {
  const [experiences, setExperienceList] = useState<Array<IExperiencesList>>(
    []
  );
  const [informations, setInformations] = useState<IContactInformation | null>(
    null
  );
  const [scholarships, setScholarship] = useState<Array<IScholarshipList>>([]);

  useEffect(() => {
    const options: { headers: { Authorization: string } } = {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    };

    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}experiences?sort=startDate:desc`,
        options
      );
      const json = await res.json();
      setExperienceList(json?.data || []);
    })();

    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}contact-information`,
        options
      );
      const json = await res.json();
      setInformations(json?.data?.attributes || []);
    })();

    (async () => {
      const res = await fetch(
        `${import.meta.env.VITE_STRAPI_URL}schoolarships`,
        options
      );
      const json = await res.json();
      setScholarship(json?.data || []);
    })();
  }, []);

  if (!informations) {
    return null;
  }

  return (
    <>
      <PDFViewer className="pdf-viewer">
        <Layout
          experiences={experiences}
          informations={informations}
          scholarships={scholarships}
        />
      </PDFViewer>
    </>
  );
}

export default PdfWrapper;
