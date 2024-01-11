import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IExperience } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";

interface IProps {
  attributes: IExperience;
}

const styles = StyleSheet.create({
  title: {
    lineHeight: "1rem",
    fontSize: 16,
    color: "#2f333d",
    paddingTop: 16,
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#548199",
  },
  date: {
    fontSize: 11,
    color: "#282c34",
  },
  subtitleWrapper: {
    alignItems: 'center',
    marginBottom: 3,
    flexDirection: 'row',
    gap: 8,
  },
  description: {
    marginTop: '2pt',
    lineHeight: 1.25,
    fontSize: 10,
    marginBottom: '4pt',
    color: 'black',
  },
  skill: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'light',
    color: '#282c34',
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
    <View wrap={false}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>{company}</Text>
        {!!date && <Text style={styles.date}>&bull;&nbsp;{date}</Text>}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.skill}>{skill}</View>
    </View>
  );
};

export default Experience;
