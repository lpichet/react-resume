import { useTranslation } from "react-i18next";
import { Education } from "../Educations/Education";
import { Experience } from "../Experiences/Experience";
import { Skill } from "../Skills/Skill";
import { Skills } from "../Skills";
import { ExperienceList } from "../Experiences";
import { EducationList } from "../Educations";
import { Contact } from "../Contact";

type ResumeProps = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  age: string;
  email: string;
  phoneNumber: string;
  location: string;
  personnalDescription: {
    [key: string]: string;
  };
  backendSkills: Skill[];
  frontendSkills: Skill[];
  experiences: Experience[];
  educations: Education[];
  isPrintMode?: boolean;
};

export default function Resume({
  firstName,
  lastName,
  jobTitle,
  age,
  email,
  phoneNumber,
  location,
  personnalDescription,
  backendSkills,
  frontendSkills,
  experiences,
  educations,
  isPrintMode = false,
}: ResumeProps) {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <div className="container-xl">
      <div className="cover shadow-lg bg-white">
        <div className="cover-bg p-3 p-lg-4 text-white">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="avatar hover-effect bg-white shadow-sm p-1">
                <img src="images/IMG-7441.jpg" width="200" height="200" />
              </div>
            </div>
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
                {firstName} {lastName}
              </h2>
              <p data-aos="fade-left" data-aos-delay="100">
                {jobTitle}
              </p>
              {!isPrintMode && (
                <div
                  className="d-print-none"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <a className="btn btn-success shadow-sm mt-1" href="#contact">
                    {t("Hire Me")}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="about-section pt-4 px-3 px-lg-4 mt-1">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h3 mb-3">{t("About Me")}</h2>
              <p>{personnalDescription[language]}</p>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <div className="pb-1">{t("Age")}</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{age}</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">{t("Email")}</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{email}</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">{t("Phone")}</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{phoneNumber}</div>
                </div>
                <div className="col-sm-4">
                  <div className="pb-1">{t("Location")}</div>
                </div>
                <div className="col-sm-8">
                  <div className="pb-1 text-secondary">{location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-print-none" />
        <Skills backendSkills={backendSkills} frontendSkills={frontendSkills} />
        <hr className="d-print-none" />
        <ExperienceList experiences={experiences} />
        <hr className="d-print-none" />
        <div className="page-break"></div>
        <EducationList educations={educations} />
        {!isPrintMode && (
          <Contact
            location={location}
            phoneNumber={phoneNumber}
            email={email}
          />
        )}
      </div>
    </div>
  );
}
