import { CommonLayout, CommonLayoutThree } from "./layout/common-layout";
import { whyChooseUsData } from "./extra";
import { links } from "../assets";

export const ChooseUs = () => {
  return (
    <CommonLayout {...whyChooseUsData}>
      <div className="row mt-5">
        <div className="col-md-5">
          <CommonLayoutThree
            isNew
            imgLink={links.chooseOne}
            title="Cross Language Querying"
            subText="Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help."
          />
        </div>

        <div className="col-md-7">
          <CommonLayoutThree
            imgLink={links.chooseTwo}
            title="Multiple file types supported"
            subText="Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!
"
          />
        </div>

        <div className="col-md-7">
          <div className="col-12">
            <CommonLayoutThree
              isNew
              imgLink={links.chooseThree}
              title="Valuable Data Citation"
              subText="Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.
"
            />
          </div>

          <div className="col-12">
            <CommonLayoutThree
              imgLink={links.chooseFour}
              title="Built in Document Viewer"
              subText="Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations."
            />
          </div>
        </div>

        <div className="col-md-5">
          <CommonLayoutThree
            isNew
            imgLink={links.chooseFive}
            title="Unbreakable Security"
            subText="Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us."
          />
        </div>
      </div>
    </CommonLayout>
  );
};
