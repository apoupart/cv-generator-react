import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IScholarship } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";

interface IProps {
  attributes: IScholarship;
}

const styles = StyleSheet.create({
  title: {
    lineHeight: "1rem",
    fontSize: 16,
    color: "#2f333d",
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
    marginBottom: 6,
    flexDirection: 'row',
    gap: 8,
  },
  description: {
    lineHeight: 1.5,
    fontSize: 11,
    marginBottom: 4,
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

const Scholarship = ({attributes}: IProps) => {
  const {
    diploma,
    school,
    description,
    startDate,
    endDate,
  } = attributes;

  const date: string = useDateDifference(startDate, endDate || '', false);

  return (
    <View wrap={false}>
      <Text style={styles.title}>{diploma}</Text>
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>{school}</Text>
        {!!date && (
          <Text style={styles.date}>&bull;&nbsp;{date}</Text>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Scholarship;
