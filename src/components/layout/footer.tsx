import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FooterWrapper, Title, links } from "../../assets";
import {
  companyInformation,
  languageList,
  resources,
  socialInformation,
} from "../extra";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, [i18n.language]);

  const changeLanguage = useCallback(
    (lang: string) => {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    },
    [i18n, setLanguage],
  );

  return (
    <FooterWrapper className="row">
      <div className="col-md-4 col-12 pe-4">
        <a
          href={links.homeLink}
          target="_blank"
          rel="noreferrer"
          className="navbar-brand"
        >
          <img src={links.logo} alt="Afforai Logo" />
          Afforai
        </a>

        <span>{t("moreInfo")}</span>

        <span>
          {t("footer.copyright")} © {year} {t("footer.right")}
        </span>

        <span>
          <a target="_blank" rel="noreferrer" href={links.badgeOne}>
            <img src={links.badgeSvg} width={200} alt="" />
          </a>
        </span>

        <h6>{t("footer.backedBy")}</h6>
        <img src={links.sputnik} width={137} alt="" className="mb-md-0 mb-5" />
      </div>

      <ListInformation title={t("footer.company")} items={companyInformation} />
      <ListInformation title={t("footer.resources")} items={resources} />
      <ListInformation title={t("footer.social")} items={socialInformation} />
      <ListInformation
        title={t("footer.language")}
        language={language}
        items={languageList}
        changeLanguage={changeLanguage}
      />
    </FooterWrapper>
  );
};

const ListInformation = ({
  title,
  items,
  language,
  changeLanguage,
}: {
  title: string;
  language?: string;
  items: Record<string, string>[];
  changeLanguage?: (lang: string) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="col-md-2 col-6 mb-4">
      <Title className="mb-4">{title}</Title>
      <ul>
        {items?.map(({ title, link, lang }) => (
          <li key={title}>
            {lang ? (
              <span
                className={`pointer ${language === lang ? "text-purple" : ""}`}
                onClick={() => {
                  changeLanguage?.(lang);
                }}
              >
                {t(title)}
              </span>
            ) : (
              <a href={link} target="_blank" rel="noreferrer">
                {t(title)}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
