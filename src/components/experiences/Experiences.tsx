import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IExperiencesList } from "../../interface/api-element";
import { IExperience } from "../../interface/api-element";

interface IProps {
  experiences: Array<IExperiencesList>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    gap: '20',
    backgroundColor: "#2f333d",
    justifyContent: "space-between",
    color: "#f2f2f2",
    padding: "20pt 20pt 24pt 20pt",
  },
  title: {
    lineHeight: '1rem',
    fontSize: "18pt",
    color: "#f2f2f2",
  },
  subtitle: {
    fontSize: "14pt",
    color: "#abb2ba",
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
  },
});


const Experiences = ({experiences}: IProps) => (
  <View style={styles.wrapper}>
    {experiences.map((experience: IExperiencesList) => {
      const {
        company,
        title,
        description,
        startDate,
        EndDate,
        isCurrentJob,
        skillList,
      }: IExperience = experience.attributes;

      return (
        <View key={experience.id}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{company}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )
    })}
    
  </View>
);

export default Experiences;
