type FooterProps = {
  firstName: string;
  lastName: string;
  socialMedias: {
    twitterUrl?: string;
    facebookUrl?: string;
    instagramUrl?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  };
};

function Footer({
  firstName,
  lastName,
  socialMedias: {
    twitterUrl,
    facebookUrl,
    instagramUrl,
    githubUrl,
    linkedinUrl,
  },
}: FooterProps) {
  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">
            {firstName} {lastName}
          </div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
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
                {linkedinUrl && (
                  <li className="nav-item">
                    <a className="nav-link" href={linkedinUrl} title="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                      <span className="menu-title sr-only">LinkedIn</span>
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
        <div className="text-small">
          <div className="mb-1">&copy; Right Resume. All rights reserved.</div>
          <div>
            Design -{" "}
            <a href="https://templateflip.com/" target="_blank">
              TemplateFlip
            </a>
          </div>
          <div>
            <a target="_blank" href="https://icons8.com/icon/15497/la-france">
              La France & Grande Bretagne
            </a>
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
