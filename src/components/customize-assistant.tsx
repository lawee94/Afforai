import { useTranslation } from "react-i18next";
import { CommonLayoutTwo } from "./layout/common-layout";
import { assistantData, modesData } from "./extra";
import { TitleDeep } from "../assets";

export const CustomizedAssistant = () => {
  const { t } = useTranslation();

  return (
    <CommonLayoutTwo {...assistantData}>
      {modesData.map(({ imageLink, title, subText, count }) => (
        <div key={title} className="mode">
          <div className="me-3">
            <img src={imageLink} alt="" />
          </div>
          <div className="mode-content">
            <div className="d-flex">
              <TitleDeep className="mb-0 me-2">{t(title)}</TitleDeep>
              <span className="badge rounded-pill badge-primary">
                {count} {t("credits")}
              </span>
            </div>
            <span>{t(subText)}</span>
          </div>
        </div>
      ))}
    </CommonLayoutTwo>
  );
};
