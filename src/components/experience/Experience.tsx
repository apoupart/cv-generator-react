import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IExperience } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";

interface IProps {
  attributes: IExperience;
}

const styles = StyleSheet.create({
  title: {
    lineHeight: "1rem",
    fontSize: 18,
    color: "#f2f2f2",
  },
  subtitle: {
    fontSize: 14,
    color: "#abb2ba",
  },
  date: {
    fontSize: 12,
    color: "#e07714",
  },
  subtitleWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    gap: 8,
  },
  description: {
    lineHeight: 1.5,
    fontSize: 11,
    marginBottom: 8,
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'light',
    color: '#abb2ba',
  }
});

const Experience = ({attributes}: IProps) => {
  const {
    company,
    title,
    description,
    startDate,
    endDate,
    isCurrentJob = false,
    skillList,
  } = attributes;

  const date: string = useDateDifference(startDate, endDate || '', isCurrentJob);

  const skill = skillList?.split(',').map((skill, index) => (
    <Text>{skill} {index !== (skillList.split(',').length - 1) && (<>&bull;</>) }</Text>
  ));

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>{company}</Text> &bull; {!!date && date}
        {!!date && (
          <Text style={styles.date}>({date})</Text>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.skill}>
      {skill}
      </View>
    </View>
  );
};

export default Experience;
