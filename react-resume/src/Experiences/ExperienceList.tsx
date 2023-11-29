import { useTranslation } from "react-i18next";
import { Experience } from "./Experience";
import ExperienceItem from "./ExperienceItem";

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  const { t } = useTranslation();

  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">{t("Work Experience")}</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
