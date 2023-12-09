import { CommonLayoutTwo } from "./layout/common-layout";
import { assistantData, modesData } from "./extra";
import { TitleDeep } from "../assets";

export const CustomizedAssistant = () => {
  return (
    <CommonLayoutTwo {...assistantData}>
      {modesData.map(({ imageLink, title, subText, count }) => (
        <div key={title} className="mode">
          <div className="me-3">
            <img src={imageLink} alt="" />
          </div>
          <div className="mode-content">
            <p>
              <TitleDeep className="mb-0 me-2">{title}</TitleDeep>{" "}
              <span className="badge rounded-pill badge-primary">
                {count} credits
              </span>
            </p>
            <span>{subText}</span>
          </div>
        </div>
      ))}
    </CommonLayoutTwo>
  );
};
