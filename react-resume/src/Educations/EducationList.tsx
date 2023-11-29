import { useTranslation } from "react-i18next";
import { EducationItem } from ".";
import { Education } from "./Education";

export default function EducationList({
  educations,
}: {
  educations: Education[];
}) {
  const { t } = useTranslation();
  return (
    <div className="education-section px-3 px-lg-4 pb-4">
      <h2 className="h3 mb-4">{t("Education")}</h2>
      <div className="timeline">
        {educations.map((education, index) => (
          <EducationItem key={index} education={education} />
        ))}
      </div>
    </div>
  );
}
