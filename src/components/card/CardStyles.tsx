import { StyleSheet } from "@react-pdf/renderer";

export const style1 = StyleSheet.create({
  experience: {
    marginTop: 10,
    position: 'relative',
  },
  isSame: {
  },
  isPrev: {
    marginTop: -2,
  },
  title: {
    marginTop: '-4pt',
    lineHeight: "1rem",
    fontSize: 12,
    color: "#2f333d",
    fontWeight: "bold",
    marginLeft: 0
  },
  isPrevTitle: {
    marginTop: '6pt',
  },
  subtitle: {
    fontSize: 10,
    lineHeight: 0,
    marginTop: "-1pt",
    marginBottom: "-4pt",
    fontWeight: "bold",
    color: "#548199",
  },
  date: {
    fontSize: 8,
    marginTop: '2pt',
    fontWeight: "semibold",
    color: "#2a404c",
  },
  subtitleWrapper: {
    alignItems: "flex-start",
    marginBottom: 1,
    flexDirection: "column",
    gap: 0,
    marginLeft: 0,
  },
  description: {
    color: "black",
    marginTop: "0pt",
    lineHeight: 1.15,
    fontSize: 8,
    letterSpacing: -0.2,
    marginBottom: "3pt",
    marginLeft: 0,
  },
  skill: {
    display: "flex",
    flexDirection: "row",
    fontSize: 7,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#282c34",
    marginLeft: 0,
  },
  companyLine: {
    position: "absolute",
    top: "0",
    left: "-10pt",
    height: "calc(100% + 18pt)",
    width: "1pt",
    backgroundColor: "#cadce6",
    content: "",
    fontSize: 10,
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
