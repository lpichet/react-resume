import { Skill } from "./Skill";

export default function SkillItem({
  skill,
  color = "primary",
}: {
  skill: Skill;
  color: string;
}) {
  return (
    <div className="mb-2" key={skill.name}>
      <span>{skill.name}</span>
      <div className="progress my-1">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay="100"
          data-aos-anchor=".page-content"
          style={{ width: `${skill.level}%` }}
          aria-valuenow={+skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {skill.legend}
        </div>
      </div>
    </div>
  );
}
