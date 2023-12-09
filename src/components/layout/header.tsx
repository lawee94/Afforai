import { useTranslation } from "react-i18next";
import { Button, HeaderNav, links } from "../../assets";
import { navLinks } from "../extra";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderNav className="flex-column navbar navbar-expand-md navbar-light fixed-top">
      <div className="container-fluid header">
        <a
          href={links.homeLink}
          target="_blank"
          rel="noreferrer"
          className="navbar-brand"
        >
          <img src={links.logo} alt="Afforai Logo" />
          Afforai
        </a>

        <div className="d-block d-md-none">
          <AuthenticationButton />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {navLinks.map(({ name, link, target }, index) => (
              <li key={`header${index}`} className="nav-item">
                <a
                  href={link}
                  className="nav-link"
                  target={target ?? "_blank"}
                  rel="noreferrer"
                >
                  {t(name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-md-block d-none">
          <AuthenticationButton />
        </div>
      </div>
    </HeaderNav>
  );
};

const AuthenticationButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <a href={links.login} target="_blank" rel="noreferrer">
        <Button className="btn-gray me-2">{t("header.login")}</Button>
      </a>
      <a href={links.signup} target="_blank" rel="noreferrer">
        <Button className="btn-gradient">{t("header.signup")}</Button>
      </a>
    </>
  );
};
