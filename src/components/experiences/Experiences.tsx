
import { View, StyleSheet } from "@react-pdf/renderer";
import { IExperiencesList } from "../../interface/api-element";
import Card from "../card/Card";

interface IProps {
  experiences: Array<IExperiencesList>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
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
    lineHeight: 1.25,
    fontSize: 12,
  },
});


const Experiences = ({ experiences }: IProps) => (
  <View style={styles.wrapper}>
    {experiences.map((experience: IExperiencesList, index: number) => (
      <Card
        key={experience.id}
        isNextSameCompany={
          experiences[index + 1]?.attributes?.location ===
          experience.attributes.location
        }
        isPrevSameCompany={
          experiences[index - 1]?.attributes?.location ===
          experience.attributes.location
        }
        attributes={experience.attributes}
      />
    ))}
  </View>
);

export default Experiences;
