import { useState } from "react";
import { Experience } from "./Experience";
import { useTranslation } from "react-i18next";

function ExperienceItem({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div
      className="timeline-card timeline-card-primary card shadow-sm"
      key={experience.companyName}
    >
      <div className="card-body">
        <div className="h5 mb-1">
          {experience.jobTitle}&nbsp;
          <span className="text-muted h6">
            {t("at")} {experience.companyName}
          </span>
        </div>
        <div className="text-muted text-small mb-2">
          {t("{{val, datetime}}", {
            val: new Date(experience.startDate),
            formatParams: {
              val: { year: "numeric", month: "long" },
            },
          })}
          &nbsp;-&nbsp;
          {t("{{val, datetime}}", {
            val: new Date(experience.endDate),
            formatParams: {
              val: { year: "numeric", month: "long" },
            },
          })}
        </div>
        <div className={isExpanded ? "d-none" : "d-block"}>
          {experience.shortDescription[language]}
          {experience?.description && (
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsExpanded(true)}
              >
                {t("See more")}
              </button>
            </div>
          )}
        </div>
        {experience?.description && (
          <div className={isExpanded ? "d-block" : "d-none"}>
            {experience?.description?.[language]}
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsExpanded(false)}
              >
                {t("See less")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;
