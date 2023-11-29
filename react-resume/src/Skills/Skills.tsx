import { useTranslation } from "react-i18next";
import { Skill } from "./Skill";
import { SkillList } from ".";

type SkillsProps = {
  backendSkills: Skill[];
  frontendSkills: Skill[];
};

export default function Skills({ backendSkills, frontendSkills }: SkillsProps) {
  const { t } = useTranslation();
  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">{t("Professional Skills")}</h2>
      <div className="row">
        <SkillList skills={backendSkills} color="primary" />
        <SkillList skills={frontendSkills} color="success" />
        <SkillList skills={frontendSkills} color="info" />
      </div>
    </div>
  );
}
