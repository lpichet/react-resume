import { useTranslation } from "react-i18next";
import { Education } from "./Education";

export default function EducationItem({ education }: { education: Education }) {
  const { t } = useTranslation();
  return (
    <div className="timeline-card timeline-card-success card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">
          {education.degree}
          <span className="text-muted h6">
            &nbsp;{t("from")}&nbsp;
            {education.schoolName}
          </span>
        </div>
        <div className="text-muted text-small mb-2">
          {t("{{val, datetime}}", {
            val: new Date(education.startDate),
            formatParams: {
              val: { year: "numeric", month: "long" },
            },
          })}
          {education.endDate && (
            <>
              &nbsp;-&nbsp;
              {t("{{val, datetime}}", {
                val: new Date(education.endDate),
                formatParams: {
                  val: { year: "numeric", month: "long" },
                },
              })}
            </>
          )}
        </div>
        <div>{education.description}</div>
      </div>
    </div>
  );
}
