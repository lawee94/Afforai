import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import {
  Button,
  CheckMark,
  ChevronRight,
  ViewPortWrapper,
  links,
} from "../assets";
import { features } from "./extra";

export const ViewPort = () => {
  const { t } = useTranslation();

  return (
    <ViewPortWrapper>
      <div className="deal">
        <img src={links.appSumo} width={26} alt="AppSumo" />
        Now on AppSumo
        <a href={links.appSumoLink} target="_blank" rel="noreferrer">
          <p>
            Get Lifetime Deal <ChevronRight />
          </p>
        </a>
      </div>
      <div className="text-content">
        <h1>{t("viewPort.title")}</h1>
        <p>{t("viewPort.subText")}</p>
      </div>

      <div className="d-block d-xl-none">
        <Marquee>
          <Features />
        </Marquee>
      </div>

      <div className="d-none d-xl-block">
        <Features />
      </div>

      <div className="buttons">
        <a href={links.signup} target="_blank" rel="noreferrer">
          <Button className="btn-gradient btn-md me-3">
            {t("header.signup")}
          </Button>
        </a>

        <a href={links.pricing} target="_blank" rel="noreferrer">
          <Button className="btn-gray btn-md">
            {t("viewPort.viewPricing")}
          </Button>
        </a>
      </div>
    </ViewPortWrapper>
  );
};

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-center mb-4">
      {features.map((feature) => (
        <div key={feature} className="feature">
          <CheckMark />
          {t(feature)}
        </div>
      ))}
    </div>
  );
};
