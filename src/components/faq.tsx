import { useTranslation } from "react-i18next";
import { ChevronRight, FAQWrapper, HeadingOne, links } from "../assets";
import { faqs } from "./extra";

export const FAQ = () => {
  const { t } = useTranslation();

  return (
    <FAQWrapper className="container mt-3">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6 col-md-8  text-center">
          <HeadingOne className="my-4">{t("faq.name")}</HeadingOne>
          <p className="">
            {t("moreInfo")}
            <a href={links.helpCenter} target="_blank" rel="noreferrer">
              {t("header.helpCenter")}
            </a>
          </p>
        </div>
      </div>

      {faqs.map(({ question, answer }, index) => (
        <div key={`faq${index}`} className="faq">
          <a href={`#faq${index}`} data-bs-toggle="collapse">
            {t(question)} <ChevronRight />
          </a>
          <div id={`faq${index}`} className="collapse">
            {t(answer)}
          </div>
        </div>
      ))}
    </FAQWrapper>
  );
};
