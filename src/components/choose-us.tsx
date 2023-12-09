import { CommonLayout, CommonLayoutThree } from "./layout/common-layout";
import { whyChooseUsData } from "./extra";
import { links } from "../assets";
import { useTranslation } from "react-i18next";

export const ChooseUs = () => {
  const { t } = useTranslation();

  return (
    <CommonLayout {...whyChooseUsData}>
      <div className="row mt-5">
        <div className="col-md-5">
          <CommonLayoutThree
            isNew
            imgLink={links.chooseOne}
            title={t("chooseUs.cardOneTitle")}
            subText={t("chooseUs.cardOneSubText")}
          />
        </div>

        <div className="col-md-7">
          <CommonLayoutThree
            imgLink={links.chooseTwo}
            title={t("chooseUs.cardTwoTitle")}
            subText={t("chooseUs.cardTwoSubText")}
          />
        </div>

        <div className="col-md-7">
          <div className="col-12">
            <CommonLayoutThree
              isNew
              imgLink={links.chooseThree}
              title={t("chooseUs.cardThreeTitle")}
              subText={t("chooseUs.cardThreeSubText")}
            />
          </div>

          <div className="col-12">
            <CommonLayoutThree
              imgLink={links.chooseFour}
              title={t("chooseUs.cardFourTitle")}
              subText={t("chooseUs.cardFourSubText")}
            />
          </div>
        </div>

        <div className="col-md-5">
          <CommonLayoutThree
            isNew
            imgLink={links.chooseFive}
            title={t("chooseUs.cardFiveTitle")}
            subText={t("chooseUs.cardFiveSubText")}
          />
        </div>
      </div>
    </CommonLayout>
  );
};
