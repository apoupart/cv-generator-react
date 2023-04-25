
import { View, StyleSheet } from "@react-pdf/renderer";
import { IExperiencesList } from "../../interface/api-element";
import Experience from "../experience/Experience";

interface IProps {
  experiences: Array<IExperiencesList>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: '24',
    backgroundColor: "#2f333d",
    justifyContent: "space-between",
    color: "#f2f2f2",
    padding: "20pt 20pt 24pt 20pt",
  },
  title: {
    lineHeight: '1rem',
    fontSize: 18,
    color: "#f2f2f2",
  },
  subtitle: {
    fontSize: 14,
    color: "#abb2ba",
    marginBottom: 10,
  },
  description: {
    lineHeight: 1.5,
    fontSize: 12,
  },
});


const Experiences = ({experiences}: IProps) => (
  <View style={styles.wrapper}>
    {experiences.map((experience: IExperiencesList) => (
     <Experience key={experience.id} attributes={experience.attributes} />
    ))}
    
  </View>
);

export default Experiences;
