import { AppWrapper } from "../assets";
import { ChooseUs } from "./choose-us";
import { CommonLayout, CommonLayoutTwo } from "./layout/common-layout";
import { CustomizedAssistant } from "./customize-assistant";
import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { LandingSummary, LovedUsers } from "./loved-users";
import { TiresomeDocuments } from "./tiresome-documents";
import { ViewPort } from "./view-port";
import { Accuracy } from "./accuracy";
import { StartSaving } from "./start-saving";
import { Testimonials } from "./testimonials";
import { FAQ } from "./faq";
import * as data from "./extra";

export const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ViewPort />
      <LandingSummary />
      <LovedUsers />
      <TiresomeDocuments />
      <CommonLayout {...data.streamLineData} />
      <ChooseUs />
      <CommonLayoutTwo {...data.versatileData} />
      <CustomizedAssistant />
      <CommonLayoutTwo {...data.multiLanguageData} />
      <CommonLayoutTwo {...data.fileWizardData} />
      <CommonLayout {...data.fileDriveData} />
      <Accuracy />
      <Testimonials />
      <CommonLayoutTwo {...data.moneyBackData} />
      <StartSaving />
      <FAQ />
      <Footer />
    </AppWrapper>
  );
};
