import { useTranslation } from "react-i18next";
import "./Header.css";
import flagUK from "../assets/icons8-grande-bretagne-48.png";
import flagFR from "../assets/icons8-la-france-48.png";

type HeaderProps = {
  firstName: string;
  lastName: string;
  socialMedias: {
    linkedinUrl?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    githubUrl?: string;
  };
};

function Header({
  firstName,
  lastName,
  socialMedias: {
    linkedinUrl,
    twitterUrl,
    facebookUrl,
    instagramUrl,
    githubUrl,
  },
}: HeaderProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">
            {firstName} {lastName}
          </h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={twitterUrl}
                    title="FlagFR"
                    onClick={() => changeLanguage("fr-FR")}
                  >
                    <img className="flag" src={flagFR} alt="flagFR" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={twitterUrl}
                    title="FlagUK"
                    onClick={() => changeLanguage("en-UK")}
                  >
                    <img className="flag" src={flagUK} alt="flagUK" />
                  </a>
                </li>
                {linkedinUrl && (
                  <li className="nav-item">
                    <a className="nav-link" href={linkedinUrl} title="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                      <span className="menu-title sr-only">LinkedIn</span>
                    </a>
                  </li>
                )}
                {twitterUrl && (
                  <li className="nav-item">
                    <a className="nav-link" href={twitterUrl} title="Twitter">
                      <i className="fab fa-twitter"></i>
                      <span className="menu-title sr-only">Twitter</span>
                    </a>
                  </li>
                )}
                {facebookUrl && (
                  <li className="nav-item">
                    <a className="nav-link" href={facebookUrl} title="Facebook">
                      <i className="fab fa-facebook"></i>
                      <span className="menu-title sr-only">Facebook</span>
                    </a>
                  </li>
                )}
                {instagramUrl && (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={instagramUrl}
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                      <span className="menu-title sr-only">Instagram</span>
                    </a>
                  </li>
                )}
                {githubUrl && (
                  <li className="nav-item">
                    <a className="nav-link" href={githubUrl} title="Github">
                      <i className="fab fa-github"></i>
                      <span className="menu-title sr-only">Github</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
