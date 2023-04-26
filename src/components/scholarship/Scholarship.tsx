import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IScholarship } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";

interface IProps {
  attributes: IScholarship;
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
    marginBottom: 4,
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
        <Text style={styles.subtitle}>{school}</Text> &bull; {!!date && date}
        {!!date && (
          <Text style={styles.date}>{date}</Text>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Scholarship;
