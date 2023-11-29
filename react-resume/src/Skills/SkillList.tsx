import { SkillItem } from ".";
import { Skill } from "./Skill";

export default function SkillList({
  skills,
  color,
}: {
  skills: Skill[];
  color: string;
}) {
  return (
    <div className="col">
      {skills.map((skill) => (
        <SkillItem key={skill.name} skill={skill} color={color} />
      ))}
    </div>
  );
}
