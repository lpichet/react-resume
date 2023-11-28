import { useEffect, useState } from "react";
import AOS from "aos";
import data from "./data/data.json";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import generatePDF, { usePDF } from "react-to-pdf";
import { useTranslation } from "react-i18next";

type ExperiencesExpanded = {
  [key: number]: boolean;
};

function App() {
  const { t } = useTranslation();
  const [experiencesExpanded, setExperiencesExpanded] =
    useState<ExperiencesExpanded>({ 0: false });
  const [isPrintMode, setIsPrintMode] = useState(false);

  const toggleDescription = (id: number) => {
    setExperiencesExpanded((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-center",
      duration: 0,
      once: true,
    });
    if (isPrintMode) {
      toPDF();
    }
  }, [isPrintMode]);

  const { toPDF, targetRef } = usePDF({
    filename: `${data.firstName} ${data.lastName}.pdf`,
  });

  const generatePDF = () => {
    setIsPrintMode(true);
  };

  return (
    <>
      {!isPrintMode && (
        <Header
          firstName={data.firstName}
          lastName={data.lastName}
          socialMedias={data.socialMedias}
        />
      )}
      <div className="page-content" ref={targetRef}>
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
                  <h2
                    className="h1 mt-2"
                    data-aos="fade-left"
                    data-aos-delay="0"
                  >
                    {data.firstName} {data.lastName}
                  </h2>
                  <p data-aos="fade-left" data-aos-delay="100">
                    {data.jobTitle}
                  </p>
                  {!isPrintMode && (
                    <div
                      className="d-print-none"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    >
                      <a
                        className="btn btn-light text-dark shadow-sm mt-1 me-1"
                        onClick={() => generatePDF()}
                        target="_blank"
                      >
                        {t("Download CV")}
                      </a>
                      <a
                        className="btn btn-success shadow-sm mt-1"
                        href="#contact"
                      >
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
                  <p>{data.personnalDescription}</p>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <div className="pb-1">{t("Age")}</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">{data.age}</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">{t("Email")}</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">{data.email}</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">{t("Phone")}</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">
                        {data.phoneNumber}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">{t("Location")}</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">{data.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="skills-section px-3 px-lg-4">
              <h2 className="h3 mb-3">{t("Professional Skills")}</h2>
              <div className="row">
                <div className="col-md-6">
                  {data.backendSkills.map((skill) => (
                    <div className="mb-2" key={skill.name}>
                      <span>{skill.name}</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-primary"
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
                  ))}
                </div>
                <div className="col-md-6">
                  {data.frontendSkills.map((skill) => (
                    <div className="mb-2" key={skill.name}>
                      <span>{skill.name}</span>
                      <div className="progress my-1">
                        <div
                          className="progress-bar bg-success"
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
                  ))}
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="work-experience-section px-3 px-lg-4">
              <h2 className="h3 mb-4">{t("Work Experience")}</h2>
              <div className="timeline">
                {data.experiences.map((experience, index) => (
                  <div
                    className="timeline-card timeline-card-primary card shadow-sm"
                    key={experience.companyName}
                  >
                    <div className="card-body">
                      <div className="h5 mb-1">
                        {experience.jobTitle}&nbsp;
                        <span className="text-muted h6">
                          at {experience.companyName}
                        </span>
                      </div>
                      <div className="text-muted text-small mb-2">
                        {experience.startDate} - {experience.endDate}
                      </div>
                      <div
                        id={`shortDescription-${index}`}
                        style={{
                          display: experiencesExpanded[index]
                            ? "none"
                            : "block",
                        }}
                      >
                        {experience.shortDescription}
                        {experience.description && (
                          <div onClick={() => toggleDescription(index)}>
                            See more
                          </div>
                        )}
                      </div>
                      {experience.description && (
                        <div
                          id={`description-${index}`}
                          style={{
                            display: experiencesExpanded[index]
                              ? "block"
                              : "none",
                          }}
                        >
                          {experience.description}
                          {/* <div className="h5">
                            1. Gestion de l'équipe et des projets
                          </div>
                          <ul>
                            <li>
                              Diriger une équipe de développement offshore en
                              Bulgarie, en supervisant les choix et difficultés
                              techniques et les pull requests.
                            </li>
                            <li>
                              Préparer et organiser les sprints, en veillant à
                              ce que les objectifs et les délais soient
                              respectés.
                            </li>
                            <li>
                              Animer le backlog refinement pour garantir la
                              priorisation des tâches en fonction des besoins
                              métier.
                            </li>
                          </ul>
                          <div className="h5">2. Encadrement technique</div>
                          <ul>
                            <li>
                              Assurer un support technique et fonctionnel à
                              l'équipe de développement et aux équipes QA,
                              résolvant les défis techniques et garantissant un
                              alignement sur les objectifs du projet.
                            </li>
                            <li>
                              Réaliser des revues des pull requests pour
                              garantir la qualité du code et la conformité aux
                              normes.
                            </li>
                            <li>
                              Écrire des spécifications techniques détaillées
                              pour orienter le développement efficace.
                            </li>
                          </ul>
                          <div className="h5">
                            3. Gestion de la qualité et de la sécurité
                          </div>
                          <ul>
                            <li>
                              Gérer les pipelines de CI/CD et les outils de
                              qualité du code et de sécurité pour maintenir la
                              robustesse et la fiabilité du code.
                            </li>
                            <li>
                              Suivre les indicateurs clés de performance (KPI)
                              pour évaluer la santé des projets et remonter les
                              alertes à ma hiérarchie.
                            </li>
                          </ul>
                          <div className="h5">
                            4. Coordination et communication
                          </div>
                          <ul>
                            <li>
                              Présenter de manière technique et fonctionnelle
                              les projets aux équipes de développement et de QA,
                              favorisant une compréhension commune des
                              objectifs.
                            </li>
                            <li>
                              Participer activement aux réunions hebdomadaires
                              de synchronisation avec les Leads Dev et Lead QA
                              d'autres équipes pour garantir la cohérence et la
                              coordination interdépartementales.
                            </li>
                            <li>
                              Analyser les incidents liés aux tests automatisés
                              et aux environnements, en proposant des solutions
                              pour optimiser les processus.
                            </li>
                          </ul>
                          <div className="h5">
                            5. Gestion des ressources humaines et documentation
                          </div>
                          <ul>
                            <li>
                              Participer au processus de recrutement en
                              examinant et validant les candidatures, ainsi
                              qu'en menant des entretiens de recrutement.
                            </li>
                            <li>
                              Rédiger et valider les documents nécessaires au
                              système de gestion de la qualité (QMS) à chaque
                              release.
                            </li>
                            <li>
                              Assurer l'onboarding et la formation des nouveaux
                              arrivants pour favoriser leur intégration efficace
                              dans l'équipe.
                            </li>
                          </ul> */}
                          <div onClick={() => toggleDescription(index)}>
                            See less
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="page-break"></div>
            <div className="education-section px-3 px-lg-4 pb-4">
              <h2 className="h3 mb-4">Education</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Masters in Information Technology{" "}
                      <span className="text-muted h6">
                        from International University
                      </span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      2011 - 2013
                    </div>
                    <div>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Bachelor of Computer Science{" "}
                      <span className="text-muted h6">
                        from Regional College
                      </span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      2007 - 2011
                    </div>
                    <div>
                      Override the digital divide with additional clickthroughs
                      from DevOps. Nanotechnology immersion along the
                      information highway will close the loop on focusing solely
                      on the bottom line.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">
                      Science and Mathematics{" "}
                      <span className="text-muted h6">from Mt. High Scool</span>
                    </div>
                    <div className="text-muted text-small mb-2">
                      1995 - 2007
                    </div>
                    <div>
                      User generated content in real-time will have multiple
                      touchpoints for offshoring. Organically grow the holistic
                      world view of disruptive innovation via workplace
                      diversity and empowerment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!isPrintMode && (
              <>
                <hr className="d-print-none" />
                <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
                  <h2 className="h3 text mb-3">Contact</h2>
                  <div className="row">
                    <div className="col-md-7 d-print-none">
                      <div className="my-2">
                        <form
                          action="https://formspree.io/your@email.com"
                          method="POST"
                        >
                          <div className="row">
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="_replyto"
                                placeholder="Your E-mail"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group my-2">
                            <textarea
                              className="form-control"
                              style={{ resize: "none" }}
                              id="message"
                              name="message"
                              rows={4}
                              placeholder="Your Message"
                              required
                            ></textarea>
                          </div>
                          <button
                            className="btn btn-primary mt-2"
                            type="submit"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-2">
                        <h3 className="h6">Location</h3>
                        <div className="pb-2 text-secondary">
                          {data.location}
                        </div>
                        <h3 className="h6">Phone</h3>
                        <div className="pb-2 text-secondary">
                          {data.phoneNumber}
                        </div>
                        <h3 className="h6">Email</h3>
                        <div className="pb-2 text-secondary">{data.email}</div>
                      </div>
                    </div>
                    <div className="col d-none d-print-block">
                      <div className="mt-2">
                        <div>
                          {data.socialMedias.twitterUrl && (
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-twitter mr-1"></i>
                                <span>{data.socialMedias.twitterUrl}</span>
                              </div>
                            </div>
                          )}
                          {data.socialMedias.facebookUrl && (
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-facebook mr-1"></i>
                                <span>{data.socialMedias.facebookUrl}</span>
                              </div>
                            </div>
                          )}
                          {data.socialMedias.instagramUrl && (
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-instagram mr-1"></i>
                                <span>{data.socialMedias.instagramUrl}</span>
                              </div>
                            </div>
                          )}
                          {data.socialMedias.githubUrl && (
                            <div className="mb-2">
                              <div className="text-dark">
                                <i className="fab fa-github mr-1"></i>
                                <span>{data.socialMedias.githubUrl}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {!isPrintMode && (
        <Footer
          firstName={data.firstName}
          lastName={data.lastName}
          socialMedias={data.socialMedias}
        />
      )}
    </>
  );
}

export default App;
