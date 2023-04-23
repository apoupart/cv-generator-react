import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Heading from "../heading/Heading";

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

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    fontFamily: 'Fira Code',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Layout = () => (
  <Document>
    <Page size={EPageSize.letter} style={styles.page}>
      <Heading />
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default Layout;
