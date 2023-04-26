import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IContactInformation } from "../../interface/api-element";

interface IProps {
  informations: IContactInformation;
}

const styles = StyleSheet.create({
  about: {
    padding: "20pt 20pt 24pt 20pt",
    fontSize: 11,
    color: 'white',
  }
});

const About = ({ informations }: IProps) => {
  const { about } = informations;

  return (
    <View style={styles.about}>
      <Text>{about}</Text>
    </View>
  );
};

export default About;
