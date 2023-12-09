import { ChevronRight, FAQWrapper, HeadingOne, links } from "../assets";
import { faqs } from "./extra";

export const FAQ = () => {
  return (
    <FAQWrapper className="container mt-3">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6 col-md-8  text-center">
          <HeadingOne className="my-4">FAQs</HeadingOne>
          <p className="">
            For more information, check out our{" "}
            <a href={links.helpCenter} target="_blank" rel="noreferrer">
              Help Center.
            </a>
          </p>
        </div>
      </div>

      {faqs.map((faq, index) => (
        <div key={`faq${index}`} className="faq">
          <a href={`#faq${index}`} data-bs-toggle="collapse">
            {faq.question} <ChevronRight />
          </a>
          <div id={`faq${index}`} className="collapse">
            {faq.answer}
          </div>
        </div>
      ))}
    </FAQWrapper>
  );
};
