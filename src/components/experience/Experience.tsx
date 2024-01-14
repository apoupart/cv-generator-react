import { Text, View } from "@react-pdf/renderer";
import { IExperience } from "../../interface/api-element";
import useDateDifference from "../../hook/useDateDifference";
import { style1, style2 } from "./ExperienceStyle";

interface IProps {
  attributes: IExperience;
  isNextSameCompany?: boolean;
  isPrevSameCompany?: boolean;
}

const Experience = ({
  attributes,
  isNextSameCompany = false,
  isPrevSameCompany = false,
}: IProps) => {
  let styles = style2;
  if (true) {
    styles = style1;
  }
  const {
    company,
    title,
    description,
    startDate,
    endDate,
    isCurrentJob = false,
    skillList,
  } = attributes;

  const date: string = useDateDifference(
    startDate,
    endDate || "",
    isCurrentJob
  );

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
      {!isPrevSameCompany && <Text style={styles.title}>{company}</Text>}
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>{title}</Text>
        {!!date && <Text style={styles.date}>&bull;&nbsp;{date}</Text>}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.skill}>{skill}</View>
    </View>
  );
};

export default Experience;
