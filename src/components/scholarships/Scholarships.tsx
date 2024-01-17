
import { View, StyleSheet } from "@react-pdf/renderer";
import { ICardAttribute, IExperiencesList, IScholarshipList } from "../../interface/api-element";
import Scholarship from "../scholarship/Scholarship";
import Card from "../card/Card";

interface IProps {
  scholarships: Array<IExperiencesList>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: '24',
    color: "#f2f2f2",
    padding: "0 20pt 28pt 20pt",
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


const Scholarships = ({ scholarships }: IProps) => (
  <View style={styles.wrapper}>
    {scholarships.map((experience: IExperiencesList, index: number) => (
      <Card
        key={experience.id}
        isNextSameCompany={
          scholarships[index + 1]?.attributes?.location ===
          experience.attributes.location
        }
        isPrevSameCompany={
          scholarships[index - 1]?.attributes?.location ===
          experience.attributes.location
        }
        attributes={experience.attributes}
      />
    ))}
  </View>
);

export default Scholarships;
