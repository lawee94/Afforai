import { useTranslation } from "react-i18next";
import { LovedUserWrapper, links } from "../assets";

export const LandingSummary = () => {
  return (
    <LovedUserWrapper>
      <div className="summary-img">
        <img src={links.laptopLanding1} className="img-fluid" alt="" />
      </div>
    </LovedUserWrapper>
  );
};

export const LovedUsers = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center my-5">
      <p>
        {t("others.lovedBy")} <span className="text-purple"> 20,000+ </span>{" "}
        {t("others.userAround")}
      </p>
      <img src={links.laptopLanding2} width={330} alt="" />
    </div>
  );
};
