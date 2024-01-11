
import { View, StyleSheet } from "@react-pdf/renderer";
import { IScholarshipList } from "../../interface/api-element";
import Scholarship from "../scholarship/Scholarship";

interface IProps {
  scholarships: Array<IScholarshipList>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: '24',
    color: "#f2f2f2",
    padding: "12pt 20pt 0 20pt",
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


const Scholarships = ({scholarships}: IProps) => (
  <View style={styles.wrapper}>
    {scholarships.map((experience: IScholarshipList) => (
     <Scholarship key={experience.id} attributes={experience.attributes} />
    ))}
    
  </View>
);

export default Scholarships;
