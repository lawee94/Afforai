import { useTranslation } from "react-i18next";
import { CommonLayoutTwo } from "./layout/common-layout";
import { documentData, documentFeatures } from "./extra";
import { links } from "../assets";

export const TiresomeDocuments = () => {
  const { t } = useTranslation();
  return (
    <CommonLayoutTwo {...documentData}>
      {documentFeatures.map((feature) => (
        <div key={feature} className="check-success">
          <img src={links.checkMarkCircled} alt="" /> {t(feature)}
        </div>
      ))}
    </CommonLayoutTwo>
  );
};
