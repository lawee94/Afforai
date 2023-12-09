import { CommonLayoutTwo } from "./layout/common-layout";
import { documentData, documentFeatures } from "./extra";
import { links } from "../assets";

export const TiresomeDocuments = () => {
  return (
    <CommonLayoutTwo {...documentData}>
      {documentFeatures.map((feature) => (
        <div className="check-success">
          <img src={links.checkMarkCircled} alt="" /> {feature}
        </div>
      ))}
    </CommonLayoutTwo>
  );
};
