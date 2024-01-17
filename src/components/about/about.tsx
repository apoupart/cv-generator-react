import { View, StyleSheet } from "@react-pdf/renderer";
import Html from 'react-pdf-html';
import { IContactInformation } from "../../interface/api-element";

interface IProps {
  informations: IContactInformation;
}

const styles = StyleSheet.create({
  about: {
    padding: "2pt 20pt 24pt 20pt",
    fontSize: 11,
    color: 'black',
  },
  aboutText: {
    fontSize: 11,
  },
});

const stylesheet = {
  li: {
    listStyleType:'none',
    borderLeft: '1.5pt solid #548199',
    paddingLeft: '12pt',
    fontSize: 10,
    marginBottom: 4,
  },
};

const About = ({ informations }: IProps) => {
  const { about } = informations;

  return (
    <View style={styles.about}>
      <Html stylesheet={stylesheet} style={styles.aboutText}>{about}</Html>
    </View>
  );
};

export default About;
