import { CommonLayout, CommonLayoutThree } from "./layout/common-layout";
import { accuracyData, accuracyInnerData } from "./extra";

export const Accuracy = () => {
  return (
    <CommonLayout {...accuracyData}>
      <div className="row mt-5">
        {accuracyInnerData.map(({ title, subText, imgLink }) => (
          <div key={title} className="col-md-4">
            <CommonLayoutThree
              imgLink={imgLink}
              title={title}
              subText={subText}
            />
          </div>
        ))}
      </div>
    </CommonLayout>
  );
};
