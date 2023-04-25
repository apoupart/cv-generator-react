import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#282c34",
    justifyContent: "space-between",
    color: "#f2f2f2",
    padding: "20pt 20pt 24pt 20pt",
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


const Heading = () => (
  <View style={styles.wrapper}>
    <View style={styles.heading}>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.expertise}>Dolor si amet</Text>
    </View>
    <View style={styles.informations}>
      <Text>(888) 888-8888</Text>
      <Text>dummy@email.com</Text>
    </View>
  </View>
);

export default Heading;
