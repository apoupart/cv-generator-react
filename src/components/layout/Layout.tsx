import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";
import Heading from "../heading/Heading";
import {
  IContactInformation,
  IExperiencesList,
  IScholarshipList,
} from "../../interface/api-element";
import Experiences from "../experiences/Experiences";
import About from "../about/About";
import Scholarships from "../scholarships/Scholarships";

enum EPageSize {
  letter = "LETTER",
}

Font.register({
  family: "Fira Code",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_GNsFVc.ttf",
      fontWeight: 300,
    },
    {
      src: "https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sFVc.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/firacode/v21/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_NprFVc.ttf",
      fontWeight: 700,
    },
  ],
});

interface IProps {
  experiences: Array<IExperiencesList>;
  scholarships: Array<IScholarshipList>;
  informations: IContactInformation;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    fontFamily: "Fira Code",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    padding: "20 20 0 20",
    color: "black",
    fontWeight: "semibold",
  },
});

const Layout = ({ experiences, informations, scholarships }: IProps) => (
  <Document>
    <Page size={EPageSize.letter} style={styles.page}>
      <Heading informations={informations} />
      <Text style={styles.title}>Expérience profesionnel</Text>
      <Experiences experiences={experiences} />
      <Text style={styles.title}>Études</Text>
      <Scholarships scholarships={scholarships} />
      <Text style={styles.title}>Compétences</Text>
      <About informations={informations} />
    </Page>
  </Document>
);

export default Layout;
