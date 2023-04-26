import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { IContactInformation } from "../../interface/api-element";

interface IProps {
  informations: IContactInformation
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#282c34",
    justifyContent: "space-between",
    color: "#f2f2f2",
    padding: "20pt 20pt 24pt 20pt",
    marginBottom: 20,
  },
  heading: {
    flexDirection: "column",
  },
  title: {
    lineHeight: '1rem',
    fontSize: "26pt",
    color: "#f2f2f2",
  },
  expertise: {
    fontSize: "14pt",
    color: "#abb2ba",
  },
  informations: {
    alignItems: 'flex-end',
    flexDirection: "column",
    color: "#f2f2f2",
    fontSize: "14pt",
    marginBottom: 4,
    textAlign: 'right',
  },
});


const Heading = ({informations}: IProps) => {
  const {name, email, jobTitle, phoneNumber} = informations;
  return (
    <View style={styles.wrapper}>
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.expertise}>{jobTitle}</Text>
      </View>
      <View style={styles.informations}>
        <Text>{phoneNumber}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
};

export default Heading;
