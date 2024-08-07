import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { IContactInformation } from "../../interface/api-element";

interface IProps {
  informations: IContactInformation;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#282c34",
    justifyContent: "space-between",
    color: "#f2f2f2",
    padding: "12pt 20pt 16pt 20pt",
    marginBottom: 12,
  },
  heading: {
    flexDirection: "column",
  },
  title: {
    lineHeight: 1,
    fontSize: "14pt",
    color: "#f2f2f2",
  },
  expertise: {
    fontSize: "12pt",
    lineHeight: 1,
    color: "#abb2ba",
    marginBottom: 8,
  },
  informations: {
    alignItems: "flex-end",
    flexDirection: "column",
    color: "#f2f2f2",
    fontSize: "14pt",
    marginBottom: 4,
    textAlign: "right",
  },
  website: {
    color: "#f2f2f2",
    fontSize: 10,
  },
  link: {
    color: "#f2f2f2",
    fontSize: 10,
    textDecoration: "none",
  },
});

const Heading = ({ informations }: IProps) => {
  const {
    name,
    email,
    jobTitle,
    phoneNumber,
    websiteUrl = "",
    githubUrl = "",
  } = informations;
  return (
    <View style={styles.wrapper}>
      <View style={styles.heading}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.expertise}>{jobTitle}</Text>
        {websiteUrl && (
          <Link src={websiteUrl} style={styles.website}>
            {websiteUrl.replace("https://", "")}
          </Link>
        )}
        {githubUrl && (
          <Link src={githubUrl} style={styles.website}>
            {githubUrl.replace("https://", "")}
          </Link>
        )}
      </View>
      <View style={styles.informations}>
        {phoneNumber && (
          <Link src={`tel:${phoneNumber}`} style={styles.link}>
            {phoneNumber.replace("https://", "")}
          </Link>
        )}
        {email && (
          <Link src={`mailto:${email}`} style={styles.link}>
            {email.replace("https://", "")}
          </Link>
        )}
      </View>
    </View>
  );
};

export default Heading;
