import { StyleSheet } from "@react-pdf/renderer";

export const style1 = StyleSheet.create({
  experience: {
    marginTop: 16,
    position: 'relative',
  },
  isSame: {
  },
  isPrev: {
    marginTop: 0,
    paddingTop: 10,
  },
  title: {
    lineHeight: "1rem",
    fontSize: 14,
    color: "#2f333d",
    fontWeight: "bold",
    marginLeft: 16
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#548199",
  },
  date: {
    fontSize: 11,
    color: "#282c34",
  },
  subtitleWrapper: {
    alignItems: "center",
    marginBottom: 3,
    flexDirection: "row",
    gap: 8,
    marginLeft: 16,
  },
  description: {
    marginTop: "2pt",
    lineHeight: 1.25,
    fontSize: 10,
    marginBottom: "4pt",
    color: "black",
    marginLeft: 16,
  },
  skill: {
    display: "flex",
    flexDirection: "row",
    fontSize: 8,
    textTransform: "uppercase",
    fontWeight: "light",
    color: "#282c34",
    marginLeft: 16,
  },
  companyLine: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "2pt",
    backgroundColor: "#548199",
    content: "",
    fontSize: 10,
    // &::before {
    //   position: "absolute",
    // top: "0",
    // left: "0",
    // backgroundColor: "red",
    // content: "",
    // fontSize: 10,
    // width: "4pt",
    // height: "4pt",
    // borderRadius: 50,
    // }
  },
});

export const style2 = StyleSheet.create({
  title: {
    lineHeight: "1rem",
    fontSize: 32,
    color: "red",
    paddingTop: 16,
    fontWeight: "normal",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#548199",
  },
  date: {
    fontSize: 11,
    color: "#282c34",
  },
  subtitleWrapper: {
    alignItems: "center",
    marginBottom: 3,
    flexDirection: "row",
    gap: 8,
  },
  description: {
    marginTop: "2pt",
    lineHeight: 1.25,
    fontSize: 10,
    marginBottom: "4pt",
    color: "black",
  },
  skill: {
    display: "flex",
    flexDirection: "row",
    fontSize: 8,
    textTransform: "uppercase",
    fontWeight: "light",
    color: "#282c34",
  },
});
