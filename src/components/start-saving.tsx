import { useTranslation } from "react-i18next";
import { Button, HeadingOne, StartSavingWrapper, links } from "../assets";

export const StartSaving = () => {
  const { t } = useTranslation();

  return (
    <StartSavingWrapper>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 ">
          <HeadingOne className="my-4">{t("saving.title")} </HeadingOne>
          <p className="">{t("saving.subText")} </p>

          <a href={links.signup} target="_blank" rel="noreferrer">
            <Button className="btn-gradient btn-md my-4">
              {t("getStarted")}
            </Button>
          </a>
        </div>
      </div>
    </StartSavingWrapper>
  );
};
