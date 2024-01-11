import { View, StyleSheet } from "@react-pdf/renderer";
import Html from 'react-pdf-html';
import { IContactInformation } from "../../interface/api-element";
import "./About.css";

interface IProps {
  informations: IContactInformation;
}

const styles = StyleSheet.create({
  about: {
    padding: "8pt 20pt 24pt 20pt",
    fontSize: 11,
    color: 'black',
  },
  aboutText: {
    fontSize: 11,
  },
  li_bullet: {
    width: 25,
    textAlign: "right",
    paddingRight: 10,
    margin: 0,
    letterSpacing: 1.15,
  },
});

const stylesheet = {
  li_bullet: {
    width: 14,
    textAlign: "right",
    lineHeight: 1.5,
    paddingBottom: 6,
  }
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
