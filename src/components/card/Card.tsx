import { Text, View } from "@react-pdf/renderer";
import Html from 'react-pdf-html';
import { ICardAttribute, IExperience } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";
import { style1, style2 } from "./CardStyles";

interface IProps {
  attributes: ICardAttribute;
  isNextSameCompany?: boolean;
  isPrevSameCompany?: boolean;
}

const Card = ({
  attributes,
  isNextSameCompany = false,
  isPrevSameCompany = false,
}: IProps) => {
  let styles = style2;
  if (true) {
    styles = style1;
  }
  const {
    location,
    title,
    description,
    startDate,
    endDate,
    isCurrent = false,
    skillList,
  } = attributes;

  const stylesheet = {
    // clear margins for all <p> tags
    p: {
      margin: 0,
      color: "black",
    },
    // add pink background color to elements with class="special"
    u: {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#040404'
    },
  };

  const date: string = useDateDifference(startDate, endDate || "", isCurrent);

  const skill = skillList?.split(",").map((skill, index) => (
    <Text>
      {skill} {index !== skillList.split(",").length - 1 && <>&bull;</>}
    </Text>
  ));

  return (
    <View
      wrap={false}
      style={[
        styles?.experience,
        isNextSameCompany && styles?.isSame,
        isPrevSameCompany && styles?.isPrev,
      ]}
    >
      <View style={styles?.companyLine} />
      {!isPrevSameCompany && <Text style={[styles?.title]}>{location}</Text>}
      <View
        style={[
          styles.subtitleWrapper,
          isPrevSameCompany && styles?.isPrevTitle,
        ]}
      >
        <Text style={styles.subtitle}>{title}</Text>
        {!!date && <Text style={styles.date}>{date}</Text>}
      </View>
      {description && <Html stylesheet={stylesheet} style={styles.description}>{description}</Html>}
      {/* {skill && <View style={styles.skill}>{skill}</View>} */}
    </View>
  );
};

export default Card;
